console.debug("Compilation finished");

import Koa from "koa";

import KoaContext from "src/type/koa/Context";

import rIndex from "./route";
import bullmq from "./bullmq";

const app = new Koa<Koa.DefaultState, KoaContext>();

app.context.bullmq = bullmq;

rIndex.forEach((middleware) => app.use(middleware));

app.listen(process.env.APP_PORT);

console.log(`App is running on port ${process.env.APP_PORT}`);
