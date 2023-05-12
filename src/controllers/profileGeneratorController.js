const profileGeneratorService = require("../services/profileGeneratorService");
const config = require("../configs/general.config");

const generatePersonProfile = (req, res) => {
  const { properties } = req.query ?? "";
  let propertiesToSend = [];
  if (properties) {
    const { propertyList } = config;
    const validList = properties.split(",").filter((key) => propertyList.includes(key));

    if (!validList.length) {
      res.status(400).json({
        status: 400,
        msg: "Invalid properties, valid properties are: " + propertyList.join(","),
      });
    }
    propertiesToSend = validList;
  }
  const profile = profileGeneratorService.generatePersonProfile(propertiesToSend);
  res.send({ profile });
};

module.exports = { generatePersonProfile };
