const capitalize = require('./capitalize');

test('Return a string with the first letter capitalized', () => {
  expect(capitalize('dog')).toBe('Dog');
});
