const capitalize = require('./capitalize');

test('capitalize function capitalizes the first character of the string', () => {
  const inputString = 'hello, world!';
  const expectedOutput = 'Hello, world!';

  const result = capitalize(inputString);
  expect(result).toBe(expectedOutput);
});