import { h } from "snabbdom";

const createElement = tagName => (strings, ...args) => ({
  type: "element",
  template: h(
    tagName, 
    {}, 
    strings.reduce(
      (acc, currString, index) => acc + currString + (args[index] || ""),
      ""
    )
  )
});

export const div = createElement("div");
export const p = createElement("p");
