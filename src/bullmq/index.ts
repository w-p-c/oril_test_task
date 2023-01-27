import { ConnectionOptions } from "bullmq";

import qConverter from "./q/converter";
import wConverter from "./worker/converter";

const connectionOptions: ConnectionOptions = {
  host: process.env.REDIS_HOST,
  port: Number.parseInt(process.env.REDIS_PORT as string),
};

wConverter(connectionOptions);

export default {
  q: {
    converter: qConverter(connectionOptions),
  },
};
