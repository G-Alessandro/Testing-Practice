const caesarCipher = require('./caesarCipher');

test('Returns a string with lowercase letters', () => {
  expect(caesarCipher('dog', 1)).toBe('eph');
});

test('Returns a string with uppercase letters', () => {
  expect(caesarCipher('DOG', 1)).toBe('EPH');
});

test('Returns a string with special characters', () => {
  expect(caesarCipher('d..o$%&g/&', 1)).toBe('e..p$%&h/&');
});

test('Returns the same string if shift equals 0', () => {
  expect(caesarCipher('Dog', 0)).toBe('Dog');
});

test('Returns a string even if shift is greater than the number of letters in the alphabet', () => {
  expect(caesarCipher('Dog', 3034)).toBe('Vry');
});

test('Returns a combination of the previous tests', () => {
  expect(caesarCipher('D...%&/o.££$11G', 10093)).toBe('I...%&/t.££$11L');
});
