const reverseString = require('../scripts/reverseString');

test('Return a reversed string', () => {
  expect(reverseString('dog')).toBe('god');
});
