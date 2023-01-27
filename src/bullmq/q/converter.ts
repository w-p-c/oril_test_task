import { Queue, ConnectionOptions } from "bullmq";

export const Q_NAME = "q-converter";

const init = (connectionOptions: ConnectionOptions) => {
  const qConverter = new Queue(Q_NAME, {
    connection: connectionOptions,
  });

  return qConverter;
};

export default init;
