import operate from '../logic/operate';
import '@testing-library/jest-dom';

describe('operate', () => {
  describe('should return the sum of two numbers', () => {
    it('sum', () => {
      const result = operate(1, 2, '+');
      expect(result).toEqual('3');
      expect(result).not.toEqual('4');
    });
  });
  describe('should return the difference of two numbers', () => {
    it('difference', () => {
      const result = operate(1, 2, '-');
      expect(result).toEqual('-1');
      expect(result).not.toEqual('4');
    });
  });
  describe('should return the product of two numbers', () => {
    it('product', () => {
      const result = operate(1, 2, 'x');
      expect(result).toEqual('2');
      expect(result).not.toEqual('4');
    });
  });
  describe('should return the quotient of two numbers', () => {
    it('quotient', () => {
      const result = operate(1, 2, '÷');
      expect(result).toEqual('0.5');
      expect(result).not.toEqual('4');
    });
  });
  describe('should return the remainder of two numbers', () => {
    it('remainder', () => {
      const result = operate(1, 2, '%');
      expect(result).toEqual('1');
      expect(result).not.toEqual('4');
    });
  });
  describe('divide by 0', () => {
    it('error', () => {
      const result = operate(12, 0, '%');
      expect(result).toBe("Can't find modulo as can't divide by 0.");
      expect(result).not.toEqual('4');
    });
  });
});
