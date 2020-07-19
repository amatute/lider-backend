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

exports.applyDiscount = products =>
  products.map(product => ({
    ...product,
    priceWithDiscount: product.price * 0.5
  }));

exports.isNumeric = num => {
  return /^\d+$/.test(num);
};
