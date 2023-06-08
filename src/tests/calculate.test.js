import calculate from '../logic/calculate';
import '@testing-library/jest-dom';

describe('calculate', () => {
  describe('should return the sum of two numbers', () => {
    it('sum', () => {
      const result = calculate({ total: '3', next: '2', operation: '+' }, '=');
      expect(result).toEqual({ total: '5', next: null, operation: null });
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
  });
  describe('should return the difference of two numbers', () => {
    it('difference', () => {
      const result = calculate({ total: '3', next: '2', operation: '-' }, '=');
      expect(result).toEqual({ total: '1', next: null, operation: null });
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
  });
  describe('should return the product of two numbers', () => {
    it('product', () => {
      const result = calculate({ total: '3', next: '2', operation: 'x' }, '=');
      expect(result).toEqual({ total: '6', next: null, operation: null });
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
  });
  describe('should return the quotient of two numbers', () => {
    it('quotient', () => {
      const result = calculate({ total: '3', next: '2', operation: '÷' }, '=');
      expect(result).toEqual({ total: '1.5', next: null, operation: null });
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
  });
  describe('should return the remainder of two numbers', () => {
    it('remainder', () => {
      const result = calculate({ total: '3', next: '2', operation: '%' }, '=');
      expect(result).toEqual({ total: '1', next: null, operation: null });
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
  });
  describe('number', () => {
    it('number', () => {
      const result = calculate(
        { total: '3', next: null, operation: null },
        '=',
      );
      expect(result).toEqual({});
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
  });
  describe('should clear the display', () => {
    it('clear', () => {
      const result = calculate({ total: '3', next: '2', operation: '%' }, 'AC');
      expect(result).toEqual({ total: null, next: null, operation: null });
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
  });
  describe('should place a decimal point', () => {
    it('decimal', () => {
      const result = calculate({ total: '3', next: null, operation: '%' }, '.');
      expect(result).toEqual({ total: '3', next: '0.', operation: '%' });
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
  });
  describe('equals without an operation', () => {
    it('equals', () => {
      const result = calculate({ total: '3', next: '2', operation: '+' }, '=');
      expect(result).toEqual({ total: '5', next: null, operation: null });
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
    it('equals', () => {
      const result = calculate({ total: '3', next: '2', operation: '-' }, '=');
      expect(result).toEqual({ total: '1', next: null, operation: null });
      expect(result).not.toEqual({ total: '4', next: null, operation: null });
    });
  });
  describe('plus/minus', () => {
    it('plus/minus', () => {
      const result = calculate(
        { total: '3', next: null, operation: null },
        '+/-',
      );
      expect(result).toEqual({ total: '-3', next: null, operation: null });
      expect(result).not.toEqual({ total: '3', next: null, operation: null });
    });
    it('plus/minus', () => {
      const result = calculate(
        { total: '-3', next: null, operation: null },
        '+/-',
      );
      expect(result).toEqual({ total: '3', next: null, operation: null });
      expect(result).not.toEqual({ total: '-3', next: null, operation: null });
    });
    it('plus/minus', () => {
      const result = calculate(
        { total: '0', next: null, operation: null },
        '+/-',
      );
      expect(result).toEqual({ total: '0', next: null, operation: null });
      expect(result).not.toEqual({ total: '-0', next: null, operation: null });
    });
  });
});
