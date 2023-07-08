const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { findAnswerKey } = require('../src/answer-key-finder');

describe('findAnswerKey', () => {
  it('Should be give answer key whose md5 hash has five leading zeroes', () => {
    const secretKey = 'a';
    const actual = findAnswerKey(secretKey);
    const expected = 0;

    strictEqual(actual, expected);
  })
})