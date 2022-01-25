import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const initialState = { firstName: "XXX", lastName: "YYY" };

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName })
};

const template = ({ firstName, lastName }) => 
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}!`;

export const User = createComponent({ template, methods, initialState });
