const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const { calculatePaperArea } = require('../src/paper-area-calculator');

describe('calculatePaperArea', () => {
  it('Should give total of 0 square feet for present with dimensions 0x0x0', () => {
    const actual = calculatePaperArea('0x0x0');
    const expected = 0;

    strictEqual(actual, expected);
  });
});