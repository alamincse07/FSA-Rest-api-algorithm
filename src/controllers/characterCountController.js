const characterCountService = require("../services/characterCountService");
const getCharacterCount = (req, res) => {
  const { string } = req.query ?? "";
  if (!string) {
    res.status(400).json({
      status: 400,
      msg: "Invalid value query parameter `string`",
    });
  }
  const characterCount = characterCountService.getCharacterCount(string);
  res.send({ counts: characterCount });
};

module.exports = { getCharacterCount };
