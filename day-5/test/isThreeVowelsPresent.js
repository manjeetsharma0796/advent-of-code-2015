const { describe, it } = require('node:test');
const assert = require('assert');
const { isThreeVowelsPresent, isAnyLetterRepeatInRow } = require('../src/isThreeVowelsPresent');

describe('isThreeVowelsPresent', () => {
  it('Should be false as no string provided', () => {
    assert.strictEqual(isThreeVowelsPresent(), false);
  })

  it('Should be false as string provided has no vowels', () => {
    assert.strictEqual(isThreeVowelsPresent('bc'), false);
  })

  it('Should be false as string provided has two vowels only', () => {
    assert.strictEqual(isThreeVowelsPresent('aep'), false);
  })

  it('Should be true as string provided has three vowels only', () => {
    assert.strictEqual(isThreeVowelsPresent('aepo'), true);
  })

  it('Should be true as string provided has three identical vowels', () => {
    assert.strictEqual(isThreeVowelsPresent('aaa'), true);
  })
})

describe('isAnyLetterRepeatInRow', () => {
  it('Should be false as no string provided', () => {
    assert.strictEqual(isAnyLetterRepeatInRow(), false);
  });

  it('Should be false as string provided has no repeating letter in row', () => {
    assert.strictEqual(isAnyLetterRepeatInRow('seb'), false);
  });

  it('Should be true as string provided has repeating letter in row', () => {
    assert.strictEqual(isAnyLetterRepeatInRow('sseb'), true);
    assert.strictEqual(isAnyLetterRepeatInRow('sebb'), true);
    assert.strictEqual(isAnyLetterRepeatInRow('seebb'), true);
  });
})