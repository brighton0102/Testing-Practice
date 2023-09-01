const stringLength = require('./stringLength'); // Replace with the correct path if using modules

test('stringLength returns the correct character count', () => {
  const inputString = 'Hello, World!';
  const result = stringLength(inputString);
  expect(result).toBe(inputString.length);
});