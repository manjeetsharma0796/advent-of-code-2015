const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Santa } = require('../src/santa');

describe('Santa', () => {
  describe('status', () => {
    it('Should give status of santa', () => {
      const santa = new Santa();

      const actual = santa.status;
      const expected = { x: 0, y: 0 };

      deepStrictEqual(actual, expected);
    });
  });

  describe('moveUp', () => {
    it('Should move santa to north direction', () => {
      const santa = new Santa();
      santa.moveUp();

      const actual = santa.status;
      const expected = { x: 0, y: 1 };

      deepStrictEqual(actual, expected);
    });

    it('Should move santa to north direction twice', () => {
      const santa = new Santa();
      santa.moveUp();
      santa.moveUp();

      const actual = santa.status;
      const expected = { x: 0, y: 2 };

      deepStrictEqual(actual, expected);
    });
  });

  describe('moveDown', () => {
    it('Should move santa to south direction', () => {
      const santa = new Santa();
      santa.moveDown();

      const actual = santa.status;
      const expected = { x: 0, y: -1 };

      deepStrictEqual(actual, expected);
    });

    it('Should move santa to south direction twice', () => {
      const santa = new Santa();
      santa.moveDown();
      santa.moveDown();

      const actual = santa.status;
      const expected = { x: 0, y: -2 };

      deepStrictEqual(actual, expected);
    });
  });
});