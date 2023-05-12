const config = require("../configs/general.config");

function generatePersonProfile(properties) {
  const firstNameList = ["John", "Jane", "Bob", "Alice", "Mike", "Emily"];
  const lastNameList = ["Doe", "Smith", "Johnson", "Brown", "Jones", "Garcia"];
  const emailProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
  const addressList = ["123 Main St.", "456 Elm St.", "789 Oak Ave.", "1011 Pine Blvd.", "1213 Maple Dr."];

  const firstName = firstNameList[Math.floor(Math.random() * firstNameList.length)];
  const lastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${
    emailProviders[Math.floor(Math.random() * emailProviders.length)]
  }`;
  const avatar = `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.floor(
    Math.random() * 100
  )}.jpg`;
  const age = Math.floor(Math.random() * 50) + 18;
  const address = addressList[Math.floor(Math.random() * addressList.length)];

  const person = {
    firstName,
    lastName,
    email,
    avatar,
    age,
    address,
  };

  if (Array.isArray(properties) && properties.length) {
    const filteredPerson = {};
    properties.forEach((prop) => {
      if (person.hasOwnProperty(prop)) {
        filteredPerson[prop] = person[prop];
      }
    });
    return filteredPerson;
  }

  return person;
}

module.exports = { generatePersonProfile };
