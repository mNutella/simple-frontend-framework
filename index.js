import { init } from "./framework";
import { div } from "./framework/element";

const firstName = "Mity";
const lastName = "Frolov";

init("#app", div`Hello ${firstName} ${lastName}!`);
