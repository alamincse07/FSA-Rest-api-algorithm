const express = require("express");
const router = express.Router();

const characterCountController = require("../controllers/characterCountController");

router.get("/", characterCountController.getCharacterCount);

module.exports = router;
