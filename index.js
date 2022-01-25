import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Mity";
const lastName = "Frolov";

init("#app", User({ firstName, lastName }));
