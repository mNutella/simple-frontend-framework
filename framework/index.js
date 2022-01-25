import { template } from "babel-core";
import * as snabbdom from "snabbdom";

const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default
]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
}

export const createComponent = ({
  template,
  methods = {},
  initialState = {}
}) => {
  let state = initialState;

  const mappedMethods = Object.keys(methods).reduce(
    (acc, key) => ({
      ...acc,
      [key]: (...args) => {
        state = methods[key](state, ...args);
        return state;
      }
    }),
    {}
  );

  return props => template({ ...props, ...state, ...mappedMethods });
}
