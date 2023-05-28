var express = require("express");
var authService = require("./../services/auth.service");

var router = express.Router();

router.post("/signIn", authService.SignIn);
router.post("/login", authService.Login);

module.exports = router;
