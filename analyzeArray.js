function analyzeArray(array) {
  let total = 0;
  array.forEach((number) => {
    total += number;
  });
  const object = {
    average: total / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  return object;
}

module.exports = analyzeArray;
