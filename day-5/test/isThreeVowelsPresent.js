const { describe, it } = require('node:test');
const assert = require('assert');
const { isThreeVowelsPresent, isAnyLetterRepeatInRow, isRestrictedStringPresent, countNiceStrings } = require('../src/isThreeVowelsPresent');

describe('isThreeVowelsPresent', () => {
  it('Should be false as no string provided', () => {
    assert.strictEqual(isThreeVowelsPresent(), false);
  });

  it('Should be false as string provided has no vowels', () => {
    assert.strictEqual(isThreeVowelsPresent('bc'), false);
  });

  it('Should be false as string provided has two vowels only', () => {
    assert.strictEqual(isThreeVowelsPresent('aep'), false);
  });

  it('Should be true as string provided has three vowels only', () => {
    assert.strictEqual(isThreeVowelsPresent('aepo'), true);
  });

  it('Should be true as string provided has three identical vowels', () => {
    assert.strictEqual(isThreeVowelsPresent('aaa'), true);
  });
});

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
});

describe('isRestrictedStringPresent', () => {
  it('Should be false as string provided has no restricted substring', () => {
    assert.strictEqual(isRestrictedStringPresent('', ['ab', 'cd', 'pq', 'xy']), false);
    assert.strictEqual(isRestrictedStringPresent('aob', ['ab', 'cd', 'pq', 'xy']), false);
  });

  it('Should be true as string provided has restricted substring', () => {
    assert.strictEqual(isRestrictedStringPresent('ab', ['ab', 'cd', 'pq', 'xy']), true);
    assert.strictEqual(isRestrictedStringPresent('cicd', ['ab', 'cd', 'pq', 'xy']), true);
    assert.strictEqual(isRestrictedStringPresent('cpqi', ['ab', 'cd', 'pq', 'xy']), true);
    assert.strictEqual(isRestrictedStringPresent('cxyd', ['ab', 'cd', 'pq', 'xy']), true);
  });
});

describe('countNiceStrings', () => {
  it('Nice String count should be zero for empty string', () => {
    assert.strictEqual(countNiceStrings('', ['ab', 'cd', 'pq', 'xy']), 0);
  });

  it('Nice String count should be zero for string provided that fails to meets all criteria', () => {
    assert.strictEqual(countNiceStrings('', ['ab', 'cd', 'pq', 'xy']), 0);
    assert.strictEqual(countNiceStrings('jchzalrnumimnmhp', ['ab', 'cd', 'pq', 'xy']), 0);
    assert.strictEqual(countNiceStrings('haegwjzuvuyypxyu', ['ab', 'cd', 'pq', 'xy']), 0);
    assert.strictEqual(countNiceStrings('dvszwmarrgswjxmb', ['ab', 'cd', 'pq', 'xy']), 0);
  });

  it('Nice String count should be one for string that meets all criteria', () => {
    assert.strictEqual(countNiceStrings('ugknbfddgicrmopn', ['ab', 'cd', 'pq', 'xy']), 1);
    assert.strictEqual(countNiceStrings('aaa', ['ab', 'cd', 'pq', 'xy']), 1);
  });
});