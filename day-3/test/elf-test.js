const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Santa } = require('../src/santa');
const { Elf } = require('../src/elf');

describe('Elf', () => {
  describe('navigate', () => {
    it('Should navigate the Santa to north when provided instruction is up', () => {
      const santa = new Santa();
      const elf = new Elf(santa);
      elf.navigate('^');
      console.log(santa.status);

      const actual = santa.status;
      const expected = { x: 0, y: 1 };

      deepStrictEqual(actual, expected);
    });

    it('Should navigate the Santa to south when provided instruction is down', () => {
      const santa = new Santa();
      const elf = new Elf(santa);
      elf.navigate('v');

      const actual = santa.status;
      const expected = { x: 0, y: -1 };

      deepStrictEqual(actual, expected);
    });

    it('Should navigate the Santa to east when provided instruction is right', () => {
      const santa = new Santa();
      const elf = new Elf(santa);
      elf.navigate('>');

      const actual = santa.status;
      const expected = { x: 1, y: 0 };

      deepStrictEqual(actual, expected);
    });


    it('Should navigate the Santa to west when provided instruction is left', () => {
      const santa = new Santa();
      const elf = new Elf(santa);
      elf.navigate('<');

      const actual = santa.status;
      const expected = { x: -1, y: 0 };

      deepStrictEqual(actual, expected);
    });
  });
});