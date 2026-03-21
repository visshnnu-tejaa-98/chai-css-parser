import { borderStyles, flexMap, utilities } from "./utility.js";

const classCache = new Map();

const parseFlex = () => {
  return { property: "display", value: "flex" };
};

const parseBorder = (valueParts) => {
  let width = "1px";
  let style = "solid";
  let color = "#444444";

  valueParts.forEach((part) => {
    if (!isNaN(part)) width = `${part}px`;
    else if (borderStyles.includes(part)) style = part;
    else color = part;
  });

  return {
    property: "border",
    value: `${width} ${style} ${color}`,
  };
};

const specialParsers = {
  flex: parseFlex,
  border: parseBorder,
};

function normalisedValue(value) {
  if (!value) return null;
  if (!isNaN(value)) return `${value}px`;
  if (flexMap[value]) return flexMap[value];
  return value;
}

export function parser(cls) {
  if (classCache.has(cls)) return classCache.get(cls);

  let parts = cls.split("-");

  if (parts.length < 3 && parts[1] === "flex") return parseFlex();

  let [_, utility, ...valueParts] = parts;

  if (specialParsers[utility]) return specialParsers[utility](valueParts);

  const property = utilities[utility];

  if (!property) return null;

  const value = valueParts.join("-");

  const parsedStyles = {
    property,
    value: normalisedValue(value),
  };

  classCache.set(cls, parsedStyles);

  return parsedStyles;
}
