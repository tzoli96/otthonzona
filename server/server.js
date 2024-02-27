const https = require("https");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const setupPassport = require("./passport");
const passport = require("passport");
const session = require("express-session");
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

//Express Session
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  require("prerender-node").set("prerenderToken", "BKbJpBUzXkbZr6Wds3DQ")
);

// MongoDB connection (if you want to enable it later)
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/property", require("./routes/property"));
app.use("/api/draft_property", require("./routes/draftproperty"));
app.use("/api/media", require("./routes/media"));
app.use("/api/agency", require("./routes/agency"));
app.use("/api/delete_reasons", require("./routes/deletereasons"));
app.use("/api/activity_logs", require("./routes/activityLogs"));
app.use("/api/log-search", require("./routes/log-search"));

const PORT = process.env.PORT || 5000;

if (process.env.MODE === "dev") {
  app.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
  });
} else {
  const httpsOptions = {
    key: fs.readFileSync("/key.pem"),
    cert: fs.readFileSync("/cert.pem"),
  };
  const server = https.createServer(httpsOptions, app);
  server.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
  });
}
