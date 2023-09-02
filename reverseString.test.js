const reverseString = require('./reverseString');

test('Return a reversed string', () => {
  expect(reverseString('dog')).toBe('god');
});
