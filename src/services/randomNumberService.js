const getRandomValue = (start, end) => {
  start = parseInt(start);
  end = parseInt(end);

  if (start > end) {
    [start, end] = [end, start];
  }

  return Math.floor(Math.random() * (end - start + 1) + start);
};

module.exports = {
  getRandomValue,
};
