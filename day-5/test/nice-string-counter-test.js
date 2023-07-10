const { describe, it } = require('node:test');
const assert = require('assert');
const { isThreeVowelsPresent,
  isAnyLetterRepeatInRow,
  isRestrictedStringPresent,
  countNiceString
} = require('../src/nice-string-counter');

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
    assert.strictEqual(isAnyLetterRepeatInRow('sefs'), false);
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

describe('countNiceString', () => {
  it('Nice String count should be zero for empty string', () => {
    assert.strictEqual(countNiceString('', ['ab', 'cd', 'pq', 'xy']), false);
  });

  it('Nice String count should be zero for string provided that fails to meets all criteria', () => {
    assert.strictEqual(countNiceString('', ['ab', 'cd', 'pq', 'xy']), false);
    assert.strictEqual(countNiceString('jchzalrnumimnmhp', ['ab', 'cd', 'pq', 'xy']), false);
    assert.strictEqual(countNiceString('haegwjzuvuyypxyu', ['ab', 'cd', 'pq', 'xy']), false);
    assert.strictEqual(countNiceString('dvszwmarrgswjxmb', ['ab', 'cd', 'pq', 'xy']), false);
  });

  it('Nice String count should be one for string that meets all criteria', () => {
    assert.strictEqual(countNiceString('ugknbfddgicrmopn', ['ab', 'cd', 'pq', 'xy']), true);
    assert.strictEqual(countNiceString('aaa', ['ab', 'cd', 'pq', 'xy']), true);
  });
});