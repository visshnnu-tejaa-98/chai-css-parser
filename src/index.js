import { parser } from "./parser.js";

const processedElements = new WeakSet();

function scanDOM() {
  return document.querySelectorAll("[class]");
}

function getChaiClasses(element) {
  return [...element.classList].filter((cls) => cls.startsWith("chai-"));
}

function applyStyles(element, property, value) {
  element.style[property] = value;
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function processElements() {
  let elements = scanDOM();
  elements = [...elements].filter((el) =>
    [...el.classList].some((cls) => cls.startsWith("chai-")),
  );

  elements.forEach((element) => {
    if (processedElements.has(element)) return;

    let chaiClasses = getChaiClasses(element);
    chaiClasses.forEach((cls) => {
      const parsed = parser(cls);
      if (!parsed) return;
      const { property, value } = parsed;
      applyStyles(element, property, value);
      removeClass(element, cls);
    });
    processedElements.add(element);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  processElements();
  document.body.style.visibility = "visible";
});
