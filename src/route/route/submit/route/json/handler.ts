import Koa from "koa";
import { Middleware } from "@koa/router";

import KoaContext from "src/type/koa/Context";
import { JOB_NAME, JobData } from "src/bullmq/job/convert";
import { ResponseBody } from "src/route/route/submit/type";

const handler: Middleware<Koa.DefaultState, KoaContext, ResponseBody> = async (
  ctx,
) => {
  const inputJson = ctx.request.rawBody;

  const jobData: JobData = {
    sourceType: "json",
    source: inputJson,
  };

  const bmqJob = await ctx.bullmq.q.converter.add(JOB_NAME, jobData);

  ctx.response.body = {
    jobId: bmqJob.id as string,
  };
};

export default handler;
