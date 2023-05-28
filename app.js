var express = require("express");
// var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var cors = require("cors");

var apiRouter = require("./src/router/api.router");

// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    //don't show the log when it is test
    // if (process.env.NODE_ENV !== "test") {
    console.log("Connected to %s", MONGODB_URL);
    console.log("App is running on Port");
    console.log("Press CTRL + C to stop the process. \n");
    // }
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
mongoose.connection;

var app = express();

//don't show the log when it is test
if (process.env.NODE_ENV !== "test") {
  app.use(logger("dev"));
}
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(cookieParser());

//To allow cross-origin requests
app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on Port: ${process.env.PORT}`);
});

// throw 404 if URL not found
app.all("*", function (req, res) {
  return res, "Page not found";
});

module.exports = app;
