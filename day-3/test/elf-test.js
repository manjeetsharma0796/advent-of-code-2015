const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Santa } = require('../src/santa');
const { Elf } = require('../src/elf');

describe('Elf', () => {
  describe('navigate', () => {
    it('Should navigate the Santa with provided instruction', () => {
      const santa = new Santa();
      const elf = new Elf(santa);
      elf.navigate('^');

      const actual = santa.status;
      const expected = { x: 0, y: 1 };

      deepStrictEqual(actual, expected);
    });

    it('Should navigate the Santa with provided instruction', () => {
      const santa = new Santa();
      const elf = new Elf(santa);
      elf.navigate('v');

      const actual = santa.status;
      const expected = { x: 0, y: -1 };

      deepStrictEqual(actual, expected);
    });
  });
});