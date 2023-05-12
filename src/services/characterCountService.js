const getCharacterCount = (str) => {
  let letters = 0;
  let symbols = 0;
  let numeric = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (/[a-zA-Z]/.test(char)) {
      letters++;
    } else if (/\d/.test(char)) {
      numeric++;
    } else {
      symbols++;
    }
  }

  return {
    letters: letters,
    symbols: symbols,
    numeric: numeric,
  };
};

module.exports = {
  getCharacterCount,
};
