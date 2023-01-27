import converter from "xml-js";

export async function xmlToJson(xml: string): Promise<object> {
  const resJson = await converter.xml2js(xml, { compact: false });

  return resJson;
}

export async function jsonToXml(json: string): Promise<string> {
  const resXml = await converter.json2xml(json, {
    compact: false,
    spaces: 4,
    ignoreComment: true,
  });

  return resXml;
}
