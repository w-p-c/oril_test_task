import Koa from "koa";
import { Middleware } from "@koa/router";
import { Job as JobBMQ } from "bullmq";

import KoaContext from "src/type/koa/Context";
import { Job } from "src/bullmq/job/convert";

import { ResponseBody } from "./type";

const handler: Middleware<Koa.DefaultState, KoaContext, ResponseBody> = async (
  ctx,
) => {
  const qConverter = ctx.bullmq.q.converter;
  const jobId = ctx.params["id"] as string;

  const job = (await JobBMQ.fromId(qConverter, jobId)) as Job;

  const isJobCompleted = await job.isCompleted();

  if (!isJobCompleted) {
    ctx.response.status = 204;

    return;
  }

  ctx.response.status = 200;
  ctx.response.body = job.returnvalue;
};

export default handler;
