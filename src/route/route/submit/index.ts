import router from "./router";

const routeMiddleware = [router.routes(), router.allowedMethods()];

export default routeMiddleware;
