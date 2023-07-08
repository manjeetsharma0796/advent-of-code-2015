const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Santa } = require('../src/santa');
const { Controller } = require('../src/controller.js');

describe('Controller', () => {
  describe('navigate', () => {
    it('Should navigate the Santa to north when provided instruction is up', () => {
      const santa = new Santa();
      const elf = new Controller([santa]);
      elf.navigate('^');

      const actual = santa.status;
      const expected = { x: 0, y: 1 };

      deepStrictEqual(actual, expected);
    });

    it('Should navigate the Santa to south when provided instruction is down', () => {
      const santa = new Santa();
      const elf = new Controller([santa]);
      elf.navigate('v');

      const actual = santa.status;
      const expected = { x: 0, y: -1 };

      deepStrictEqual(actual, expected);
    });

    it('Should navigate the Santa to east when provided instruction is right', () => {
      const santa = new Santa();
      const elf = new Controller([santa]);
      elf.navigate('>');

      const actual = santa.status;
      const expected = { x: 1, y: 0 };

      deepStrictEqual(actual, expected);
    });

    it('Should navigate the Santa to west when provided instruction is left', () => {
      const santa = new Santa();
      const elf = new Controller([santa]);
      elf.navigate('<');

      const actual = santa.status;
      const expected = { x: -1, y: 0 };

      deepStrictEqual(actual, expected);
    });

    it('Should navigate the Santa to west and register log when provided instruction is left', () => {
      const santa = new Santa();
      const elf = new Controller([santa]);
      elf.navigate('<');

      const actual = elf.log;
      const expected = { '-1,0': 'house' };

      deepStrictEqual(actual, expected);
    });

    it('Should navigate the Santa multiple instructions and record logs in it', () => {
      const santa = new Santa();
      const elf = new Controller([santa]);
      elf.navigate('<>');

      const actual = elf.log;
      const expected = { '-1,0': 'house', '0,0': 'house' };

      deepStrictEqual(actual, expected);
    });

    it('Should navigate Santas instructions and record logs in it', () => {
      const santa = new Santa();
      const santa1 = new Santa();

      const elf = new Controller([santa, santa1]);
      elf.navigate('<>');

      const actual = elf.log;
      const expected = { '-1,0': 'house', '1,0': 'house' };

      deepStrictEqual(actual, expected);
    });
  });

  describe('log', () => {
    it('Should be empty log when no instruction provided', () => {
      const santa = new Santa();
      const elf = new Controller([santa]);

      const actual = elf.logs;
      const expected = {};

      deepStrictEqual(actual, expected);
    });
  });
});