const createElement = tagName => (strings, ...args) => ({
  type: tagName,
  template: strings.reduce(
  (acc, currString, index) => acc + currString + (args[index] || ""),
  ""
)});

export const div = createElement("div");
export const p = createElement("p");
