const { isPalindrome } = require('../utils/helpers');

describe('utils', () => {
  describe('helpers', () => {
    describe('isPalidrome', () => {
      it('Should return false if the input is null', () => {
        expect(isPalindrome(null)).toEqual(false);
      });
      it('Should return false if the input is undefined', () => {
        expect(isPalindrome(undefined)).toEqual(false);
      });
      it('Should return false if the input is an empty string', () => {
        expect(isPalindrome('')).toEqual(false);
      });
      it('Should return false if the input length is lower than 3', () => {
        expect(isPalindrome('a')).toEqual(false);
        expect(isPalindrome('aa')).toEqual(false);
      });
      it('Should returns true if the input is a palindrome', () => {
        expect(isPalindrome('aaa')).toEqual(true);
        expect(isPalindrome('TeneT')).toEqual(true);
      });
      it('Should returns false if the input is not a palindrome', () => {
        expect(isPalindrome('Caracas')).toEqual(false);
        expect(isPalindrome('Santiago')).toEqual(false);
      });
    });
  });
});
