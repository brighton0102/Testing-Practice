const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // Tests for the add() method
  describe('add', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add a positive and a negative number correctly', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('should add two negative numbers correctly', () => {
      expect(calculator.add(-7, -3)).toBe(-10);
    });
  });

  // Tests for the subtract() method
  describe('subtract', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should subtract a positive and a negative number correctly', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('should subtract two negative numbers correctly', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });

  // Tests for the divide() method
  describe('divide', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should divide a positive number by a negative number correctly', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero.');
    });
  });

  // Tests for the multiply() method
  describe('multiply', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should multiply a positive and a negative number correctly', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers correctly', () => {
      expect(calculator.multiply(-7, -3)).toBe(21);
    });
  });
});