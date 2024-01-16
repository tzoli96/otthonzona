const fs = require('fs');
const path = require('path');

function logFile(filename, logString) {
  const logsFolder = 'logs';
  const timestamp = new Date();
  const humanReadableTimestamp = timestamp.toLocaleString();
  const unixTimestamp = timestamp.getTime();
  const logEntry = `[${humanReadableTimestamp}] [Unix TS: ${unixTimestamp}] ${logString}\n`;

  if (!fs.existsSync(logsFolder)) {
    fs.mkdirSync(logsFolder);
  }

  const filePath = path.join(logsFolder, filename);

  fs.appendFile(filePath, logEntry, (err) => {
    if (err) {
      console.error(`Error writing to ${filePath}: ${err.message}`);
    } else {
      console.log(`Log entry added to ${filePath}`);
    }
  });
}

module.exports = logFile;
