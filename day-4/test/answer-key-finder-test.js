const { describe, it } = require('node:test');
const assert = require('assert');
const { findSuffixOfSecretKey } = require('../src/answer-key-finder');

describe('findSuffixOfSecretKey', () => {
  it('Should find suffix of secret key whose md5 hash has one leading zeroes', () => {
    assert.strictEqual(findSuffixOfSecretKey('a', 1), 27);
  });

  it('Should find suffix of secret key whose md5 hash has five leading zeroes', () => {
    assert.strictEqual(findSuffixOfSecretKey('abcdef', 5), 609043);
    assert.strictEqual(findSuffixOfSecretKey('yzbqklnj', 5), 282749);
  });

  it('Should find suffix of secret key whose md5 hash has six leading zeroes', () => {
    assert.strictEqual(findSuffixOfSecretKey('yzbqklnj', 6), 9962624);
  });
});