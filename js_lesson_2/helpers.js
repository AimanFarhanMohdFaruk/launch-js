function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number < 0 || Number.isNaN(number);
}

module.exports = {
  prompt,
  isInvalidNumber,
};
