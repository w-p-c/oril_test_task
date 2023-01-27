import Router from "@koa/router";

import rXml from "./route/xml";
import rJson from "./route/json";

const router = new Router();

router.post("/xml", ...rXml);
router.post("/json", ...rJson);

export default router;
