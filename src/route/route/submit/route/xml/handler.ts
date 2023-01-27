import Koa from "koa";
import { Middleware } from "@koa/router";

import KoaContext from "src/type/koa/Context";
import { JOB_NAME, JobData } from "src/bullmq/job/convert";

import { ResponseBody } from "../../type";

const handler: Middleware<Koa.DefaultState, KoaContext, ResponseBody> = async (
  ctx,
) => {
  const inputXml = ctx.request.rawBody;

  const jobData: JobData = {
    sourceType: "xml",
    source: inputXml,
  };

  const bmqJob = await ctx.bullmq.q.converter.add(JOB_NAME, jobData, {
    delay: 10000, // Intentional delay for demo purposes
  });

  ctx.response.body = {
    jobId: bmqJob.id as string,
  };
};

export default handler;
