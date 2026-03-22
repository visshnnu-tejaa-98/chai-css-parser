const spacing = {
  p: "padding",
  m: "margin",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
};

const typography = {
  text: "color",
  fs: "fontSize",
  fw: "fontWeight",
  td: "textDecoration",
  lh: "lineHeight",
};

const layout = {
  w: "width",
  h: "height",
  display: "display",
};

const borders = {
  rounded: "borderRadius",
  border: "border",
};

const flex = {
  items: "alignItems",
  justify: "justifyContent",
};

const misc = {
  outline: "outline",
  bg: "backgroundColor",
  cursor: "cursor",
  align: "textAlign",
};
export const utilities = {
  ...spacing,
  ...typography,
  ...layout,
  ...borders,
  ...flex,
  ...misc,
};

export const flexMap = {
  center: "center",
  start: "flex-start",
  end: "flex-end",

  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

export const borderStyles = ["solid", "dashed", "dotted", "double", "none"];

export const textDecorationMap = {
  underline: "underline",
  lineThrough: "line-through",
  none: "none",
  over: "overline",
};
