import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

const initialState = { firstName: "XXX", lastName: "YYY" };

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName })
};

const template = ({ firstName, lastName, changeName }) => 
  div`${onClick(() => changeName("Filip"))} Hello ${firstName} ${lastName}!`;

export const User = createComponent({ template, methods, initialState });
