import { h } from "snabbdom";

const initialState = {
  template: ""
};

const createReducer = args => (acc, currString, index) => ({
  ...acc, 
  template: acc.template + currString + (args[index] || "")
});

const createElement = tagName => (strings, ...args) => {
  const { template } = strings.reduce(createReducer(args), initialState);

  return {
    type: "element",
    template: h(tagName, {}, template)
  };
}

export const div = createElement("div");
export const p = createElement("p");
