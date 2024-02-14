const express = require("express");
const AWS = require("aws-sdk");
const router = express.Router();

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_ID,
  secretAccessKey: process.env.S3_SECRET,
  region: "eu-north-1",
});

const s3 = new AWS.S3();
const bucketName = "log-history";
const logFileName = "searchHistory.json";

router.post("/", async (req, res) => {
  const searchHistoryEntry = req.body;

  try {
    let history;
    try {
      const { Body } = await s3
        .getObject({ Bucket: bucketName, Key: logFileName })
        .promise();
      history = Body ? JSON.parse(Body.toString()) : [];
    } catch (error) {
      if (error.code === "NoSuchKey") {
        history = [];
      } else {
        throw error;
      }
    }

    history.push(searchHistoryEntry);

    await s3
      .putObject({
        Bucket: bucketName,
        Key: logFileName,
        Body: JSON.stringify(history, null, 2),
        ContentType: "application/json",
      })
      .promise();

    res.send("Search logged successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error logging to S3");
  }
});

module.exports = router;
