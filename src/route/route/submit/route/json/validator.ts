import Koa from "koa";
import { Middleware } from "@koa/router";

import KoaContext from "src/type/koa/Context";
import { ResponseBody } from "src/route/route/submit/type";

const ALLOWED_CONTENT_TYPES = ["application/json"];

const validator: Middleware<
  Koa.DefaultState,
  KoaContext,
  ResponseBody
> = async (ctx, next) => {
  const hContentType = ctx.request.headers["content-type"];

  if (
    typeof hContentType !== "undefined" &&
    ALLOWED_CONTENT_TYPES.includes(hContentType)
  ) {
    await next();
  } else {
    ctx.response.body = {
      error: `Allowed content-type header values are: ${ALLOWED_CONTENT_TYPES.join(
        ", ",
      )}`,
    };
  }
};

export default validator;
