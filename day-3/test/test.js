const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Santa } = require('../src/santa');

describe('Santa', () => {
  it('Should not move santa for no direction', () => {
    const santa = new Santa();

    const actual = santa.status;
    const expected = { x: 0, y: 0 };

    deepStrictEqual(actual, expected);
  });
});