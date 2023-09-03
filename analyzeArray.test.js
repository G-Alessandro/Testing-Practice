const analyzeArray = require('./analyzeArray');

test('Returns an object with the properties medium, minimum, maximum and length', () => {
  expect(analyzeArray([3, 8, 10, 34, 66])).toEqual({
    average: 24.2, min: 3, max: 66, length: 5,
  });
});

test('Returns an object with the properties medium, minimum, maximum and length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});
