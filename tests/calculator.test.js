const calculator = require('../scripts/calculator');

test('Add two numbers', () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test('Does the subtraction of two numbers', () => {
  expect(calculator.subtract(6, 2)).toBe(4);
});

test('Does the division of two numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('Does the multiplication of two numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
