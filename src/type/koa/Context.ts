import bmq from "src/bullmq";

export default interface Context {
  bullmq: typeof bmq;
}
