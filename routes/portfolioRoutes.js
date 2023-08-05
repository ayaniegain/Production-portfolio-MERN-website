const express = require("express");
const router = express.Router();
const {
  sendEmailController,
} = require("../controllers/portfolioController.js");

router.post("/sendEmail", sendEmailController);

module.exports = router;

