var express = require("express");
var wheatService = require("../services/wheatDisease.service");

var router = express.Router();

router.get("/", wheatService.getDiseaseList);
router.post("/", wheatService.addDisease);
router.post("/AI_desease", wheatService.AI_desease);

module.exports = router;
