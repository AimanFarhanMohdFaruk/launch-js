export function prompt(message) {
  console.log(`=> ${message}`);
}

export function isInvalidNumber(number) {
  return number < 0 || Number.isNaN(number);
}
