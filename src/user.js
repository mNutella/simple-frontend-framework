import { div } from "../framework/element";

export const User = ({ firstName, lastName }) => 
  div`Hello ${firstName} ${lastName}!`;