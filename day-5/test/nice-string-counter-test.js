const { describe, it } = require('node:test');
const assert = require('assert');

const { areThreeVowelsPresent,
  isAnyLetterRepeatInRow,
  isRestrictedSubstringPresent,
  isStringNice,
  countNiceStrings
} = require('../src/nice-string-counter');

describe('areThreeVowelsPresent', () => {
  it('Should be false as no string provided', () => {
    assert.strictEqual(areThreeVowelsPresent(), false);
  });

  it('Should be false as string provided has no vowels', () => {
    assert.strictEqual(areThreeVowelsPresent('bc'), false);
  });

  it('Should be false as string provided has two vowels only', () => {
    assert.strictEqual(areThreeVowelsPresent('aep'), false);
  });

  it('Should be true as string provided has three vowels only', () => {
    assert.strictEqual(areThreeVowelsPresent('aepo'), true);
  });

  it('Should be true as string provided has three identical vowels', () => {
    assert.strictEqual(areThreeVowelsPresent('aaa'), true);
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

describe('isRestrictedSubstringPresent', () => {
  it('Should be false as string provided has no restricted substring', () => {
    assert.strictEqual(isRestrictedSubstringPresent('', ['ab', 'cd', 'pq', 'xy']), false);
    assert.strictEqual(isRestrictedSubstringPresent('aob', ['ab', 'cd', 'pq', 'xy']), false);
  });

  it('Should be true as string provided has restricted substring', () => {
    assert.strictEqual(isRestrictedSubstringPresent('ab', ['ab', 'cd', 'pq', 'xy']), true);
    assert.strictEqual(isRestrictedSubstringPresent('cicd', ['ab', 'cd', 'pq', 'xy']), true);
    assert.strictEqual(isRestrictedSubstringPresent('cpqi', ['ab', 'cd', 'pq', 'xy']), true);
    assert.strictEqual(isRestrictedSubstringPresent('cxyd', ['ab', 'cd', 'pq', 'xy']), true);
  });
});

describe('isStringNice', () => {
  it('Nice String count should be zero for empty string', () => {
    assert.strictEqual(isStringNice('', ['ab', 'cd', 'pq', 'xy']), false);
  });

  it('Nice String count should be zero for string provided that fails to meets all criteria', () => {
    assert.strictEqual(isStringNice('', ['ab', 'cd', 'pq', 'xy']), false);
    assert.strictEqual(isStringNice('jchzalrnumimnmhp', ['ab', 'cd', 'pq', 'xy']), false);
    assert.strictEqual(isStringNice('haegwjzuvuyypxyu', ['ab', 'cd', 'pq', 'xy']), false);
    assert.strictEqual(isStringNice('dvszwmarrgswjxmb', ['ab', 'cd', 'pq', 'xy']), false);
  });

  it('Nice String count should be one for string that meets all criteria', () => {
    assert.strictEqual(isStringNice('ugknbfddgicrmopn', ['ab', 'cd', 'pq', 'xy']), true);
    assert.strictEqual(isStringNice('aaa', ['ab', 'cd', 'pq', 'xy']), true);
  });
});

describe('countNiceString', () => {
  it('count should be zero as the string provided is not nice', () => {
    assert.strictEqual(countNiceStrings([''], ['ab', 'cd', 'pq', 'xy']), 0);
    assert.strictEqual(countNiceStrings(['jchzalrnumimnmhp'], ['ab', 'cd', 'pq', 'xy']), 0);
    assert.strictEqual(countNiceStrings(['haegwjzuvuyypxyu'], ['ab', 'cd', 'pq', 'xy']), 0);
    assert.strictEqual(countNiceStrings(['dvszwmarrgswjxmb'], ['ab', 'cd', 'pq', 'xy']), 0);
  });
});