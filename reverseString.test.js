const reverseString = require ('./reverseString');

test('reverseString reverses the input string correctly', () => {
  const inputString = 'Hello, World!';
  const expectedOutput = '!dlroW ,olleH';

  const result = reverseString(inputString);
  expect(result).toBe(expectedOutput);
});