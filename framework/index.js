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
  let oldNode;

  const mapMethods = props => Object.keys(methods).reduce(
    (acc, key) => ({
      ...acc,
      [key]: (...args) => {
        state = methods[key](state, ...args);

        const newNode = template({
          ...props,
          ...state,
          ...mapMethods(props)
        });

        patch(oldNode.template, newNode.template);
        oldNode = newNode;

        return state;
      }
    }),
    {}
  );

  return props => {
    oldNode = template({ 
      ...props, 
      ...state, 
      ...mapMethods(props)
    });

    return oldNode;
  }
}
