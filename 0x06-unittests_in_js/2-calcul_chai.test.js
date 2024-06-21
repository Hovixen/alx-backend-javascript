/*
 * Test case for 1-calcul.js
 */

const chai = require('chai');
const expect = chai.expect();
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

     it('should return 5 when inputs are 1.4 and 3.7', () => {
      expect(calculateNumber('SUM', 1.4, 3.7)).to.equal(5);
    });

    it('should return 0 when inputs are -0.4 and 0.4', () => {
      expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when inputs are 1 and 3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return -3 when inputs are 1.4 and 3.7', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 3.7)).to.equal(-3);
    });

    it('should return -0 when inputs are -0.4 and 0.4', () => {
      expect(calculateNumber('SUBTRACT', -0.4, 0.4)).to.equal(-0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.25 when inputs are 1 and 4', () => {
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });

    it('should return "Error" when rounded divisor is zero', () => {
      expect(calculateNumber('DIVIDE', 1, 0.4)).to.equal('Error');
    });
  });

  // Additional edge cases
  it('should return 2000000000 when summing 999999999.5 and 999999999.5', () => {
    expect(calculateNumber('SUM', 999999999.5, 999999999.5)).to.equal(2000000000);
  });
});
