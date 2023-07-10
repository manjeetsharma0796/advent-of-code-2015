const { describe, it } = require('node:test');
const assert = require('assert');
const { finsSuffixOfSecretKey } = require('../src/answer-key-finder');

describe('finsSuffixOfSecretKey', () => {
  it('Should find suffix of secret key whose md5 hash has one leading zeroes', () => {
    assert.strictEqual(finsSuffixOfSecretKey('a', 1), 27);
  });

  it('Should find suffix of secret key whose md5 hash has five leading zeroes', () => {
    assert.strictEqual(finsSuffixOfSecretKey('abcdef', 5), 609043);
    assert.strictEqual(finsSuffixOfSecretKey('yzbqklnj', 5), 282749);
  });

  it('Should find suffix of secret key whose md5 hash has six leading zeroes', () => {
    assert.strictEqual(finsSuffixOfSecretKey('yzbqklnj', 6), 9962624);
  });
});