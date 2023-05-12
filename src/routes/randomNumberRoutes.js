const express = require("express");
const router = express.Router();

const randomNumberController = require("../controllers/randomNumberController");

router.get("/", randomNumberController.getRandomValue);

module.exports = router;
