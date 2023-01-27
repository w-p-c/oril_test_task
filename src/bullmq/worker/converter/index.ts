import { Worker, ConnectionOptions } from "bullmq";
import { JobData, JobResult } from "src/bullmq/job/convert";

import { Q_NAME } from "src/bullmq/q/converter";
import processor from "./processor";

const init = (connectionOptions: ConnectionOptions) => {
  const wConverter = new Worker<JobData, JobResult>(Q_NAME, processor, {
    connection: connectionOptions,
  });

  wConverter.on("error", (err) => {
    console.error(err);
  });

  return wConverter;
};

export default init;
