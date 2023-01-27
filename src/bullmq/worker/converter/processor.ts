import { Job, JobResult } from "src/bullmq/job/convert";
import { jsonToXml, xmlToJson } from "src/utility/jsonXml";

const processor = async (job: Job): Promise<JobResult> => {
  let converterFunction: typeof jsonToXml | typeof xmlToJson;

  switch (job.data.sourceType) {
    case "json": {
      converterFunction = jsonToXml;
      break;
    }

    case "xml": {
      converterFunction = xmlToJson;
      break;
    }
  }

  try {
    const result = await converterFunction(job.data.source);

    return {
      converted: result,
    };
  } catch (e) {
    console.error(e);
    return {
      error: `${e}`,
    };
  }
};

export default processor;
