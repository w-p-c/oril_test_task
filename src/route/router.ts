import Router from "@koa/router";

import rSubmit from "./route/submit";
import rRetrieve from "./route/retrieve";

const router = new Router();

router.use("/submit", ...rSubmit);

router.get("/retrieve/:id", ...rRetrieve);

export default router;
