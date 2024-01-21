const axios = require("axios");
const xml2js = require("xml2js");
const parser = new xml2js.Parser();

// URL of the main XML
const mainXmlUrl = "https://hirdeteskezeles.hu/xml_datas/ozona/xml_hk/xmls.xml"; // Replace with your main XML URL

async function getAgentXmlUrls() {
  try {
    const response = await axios.get(mainXmlUrl);
    const result = await parser.parseStringPromise(response.data);
    return result.agents.agent.map((agent) => agent.xml[0]);
  } catch (error) {
    console.error(`Error fetching main XML:`, error);
    return [];
  }
}

async function countItemsInXml(url) {
  try {
    const response = await axios.get(url);
    const result = await parser.parseStringPromise(response.data);
    return result.items.item.length;
  } catch (error) {
    console.error(`Error processing ${url}:`, error);
    return 0;
  }
}

async function countAllItems() {
  const agentXmlUrls = await getAgentXmlUrls();
  let totalCount = 0;

  for (const url of agentXmlUrls) {
    const itemCount = await countItemsInXml(url);
    totalCount += itemCount;
    console.log(`Counted ${itemCount} items in ${url}`);
  }

  console.log(`Total items in all XMLs: ${totalCount}`);
}

countAllItems();
