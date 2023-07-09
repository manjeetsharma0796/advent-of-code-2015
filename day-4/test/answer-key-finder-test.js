const { describe, it } = require('node:test');
const assert = require('assert');
const { findAnswerKey } = require('../src/answer-key-finder');

describe('findAnswerKey', () => {
  it('Should find answer key whose md5 hash has one leading zeroes', () => {
    assert.strictEqual(findAnswerKey('a', 1), 27);
  });

  it('Should find answer key whose md5 hash has five leading zeroes', () => {
    assert.strictEqual(findAnswerKey('b', 5), 961275);
    assert.strictEqual(findAnswerKey('abcdef', 5), 609043);
    assert.strictEqual(findAnswerKey('yzbqklnj', 5), 282749);
  });

  it('Should find answer key whose md5 hash has six leading zeroes', () => {
    assert.strictEqual(findAnswerKey('yzbqklnj', 6), 9962624);
  });
});