const randomNumberService = require("../services/randomNumberService");
const getRandomValue = (req, res) => {
  const { start, end } = req.query;
  if (isNaN(start) || isNaN(end)) {
    res.status(400).json({
      status: 400,
      msg: "Invalid number input for query parameter `start` and `end`",
    });
  }
  const randomNumber = randomNumberService.getRandomValue(start, end);
  res.send({ randomNumber });
};

module.exports = { getRandomValue };
