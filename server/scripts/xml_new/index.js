const logFile = require("../utils/logFile");
const xml2js = require("xml2js");
const { handleAgent } = require("./agent");
const prisma = require("../../prisma/prisma");
const axios = require("axios");

const parser = new xml2js.Parser();
logFile("index-log.txt", "Starting XML parsing");

axios
  .get("https://hirdeteskezeles.hu/xml_datas/ozona/xml_hk/xmls.xml")
  .then((response) => {
    const mainContent = response.data;

    parser.parseString(mainContent, async (err, agents) => {
      if (err) {
        console.error("Error parsing XML:", err);
        return;
      }

      logFile(
        "index-log.txt",
        `Parsed XML. Number of agents found: ${agents.agents.agent.length}`
      );

      handleAgent(agents.agents.agent);
    });
  })
  .catch((error) => {
    console.error("Error fetching the XML file:", error);
  });
