function caesarCipher(string, shift) {
  if (shift === 0) {
    return string;
  }
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    const letterRegex = /^[A-Za-z]$/;

    if (letterRegex.test(string[i])) {
      const alphabetIndex = alphabet.indexOf(string[i].toLowerCase());

      let shiftReduced = shift;

      while (shiftReduced > 26) {
        shiftReduced -= 26;
      }

      let indexPlusShift = alphabetIndex + shiftReduced;

      while (indexPlusShift > 25) {
        indexPlusShift = 0;
        indexPlusShift += shiftReduced - 1;
      }

      if (string[i] === string[i].toUpperCase()) {
        result += alphabet[indexPlusShift].toUpperCase();
      } else {
        result += alphabet[indexPlusShift];
      }
    } else {
      result += string[i];
    }
  }
  return result;
}

module.exports = caesarCipher;
