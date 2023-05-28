const express = require("express");
const authRouter = require("./auth.router");
const diseaseRoute = require("./wheatDisease.router");
const blogRoute = require("../router/blog.route");
const symptomsRoute = require("../router/symptoms.route");
const app = express();

app.use("/auth", authRouter);
app.use("/disease", diseaseRoute);
app.use("/blog", blogRoute);
app.use("/symptoms", symptomsRoute);
module.exports = app;
