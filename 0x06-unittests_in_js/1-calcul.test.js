/*
 * Test case for 1-calcul.js
 */

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });

     it('should return 5 when inputs are 1.4 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.7), 5);
    });

    it('should return 0 when inputs are -0.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when inputs are 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return -3 when inputs are 1.4 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
    });

    it('should return -0 when inputs are -0.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -0.4, 0.4), -0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.25 when inputs are 1 and 4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });

    it('should return "Error" when rounded divisor is zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0.4), 'Error');
    });
  });

  // Additional edge cases
  it('should throw an error for invalid operation type', () => {
    assert.throws(() => calculateNumber('INVALID', 1, 3), /Invalid operation type/);
  });

  it('should return 2000000000 when summing 999999999.5 and 999999999.5', () => {
    assert.strictEqual(calculateNumber('SUM', 999999999.5, 999999999.5), 2000000000);
  });
});
