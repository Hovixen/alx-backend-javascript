/*
 * Utility module
 */

class Utils {
  static calculateNumber(type, a, b) {
    const Anum = Math.round(a);
    const Bnum = Math.round(b);

    switch(type) {
      case 'SUM':
        return Anum + Bnum;
      case 'SUBTRACT':
        return Anum - Bnum;
      case 'DIVIDE':
        if (Bnum === 0) {
          return 'Error';
        }
        return Anum / Bnum;
      default:
        throw new Error('Invalid operation type');
    }
  }
}

module.exports = Utils;
