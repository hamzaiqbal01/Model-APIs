var express = require("express");

var symptomService = require("../services/symptoms.service");

var router = express.Router();

router.post("/addSymptoms", symptomService.Symptoms);
router.post("/searchSymptoms", symptomService.FilterSymptoms);

module.exports = router;
