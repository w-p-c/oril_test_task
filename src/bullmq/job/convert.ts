import { Job as JobBMQ } from "bullmq";

export type JobData = {
  sourceType: "json" | "xml";
  source: string;
};

export type JobResult = {
  converted?: string | object;
  error?: string;
};

export type Job = JobBMQ<JobData, JobResult, string>;

export const JOB_NAME = "j-convert";
