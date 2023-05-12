const express = require("express");
const router = express.Router();

const profileGeneratorController = require("../controllers/profileGeneratorController");

router.get("/", profileGeneratorController.generatePersonProfile);

module.exports = router;
