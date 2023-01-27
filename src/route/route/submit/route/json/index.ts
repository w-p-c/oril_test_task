import bodyparser from "koa-bodyparser";

import handler from "./handler";
import validator from "./validator";

const routeMiddleware = [
  validator,
  bodyparser({ enableTypes: ["json"] }),
  handler,
];

export default routeMiddleware;
