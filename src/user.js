import { div } from "../framework/element";
import { onClick } from "../framework/event";

const initialState = { firstName: "XXX", lastName: "YYY" };

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName })
};

export const User = ({ firstName, lastName }) => 
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}!`;