exports.isPalindrome = input => {
  if (!input || input === '' || input.length < 3) {
    return false;
  }
  const str = input.toLowerCase();
  const reversedInput = str
    .split('')
    .reverse()
    .join('');
  return str === reversedInput;
};
