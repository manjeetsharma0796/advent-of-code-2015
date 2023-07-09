const {describe, it} = require('node:test');
const assert = require('assert');
const { isThreeVowelsPresent } = require('../src/isThreeVowelsPresent');

describe('isThreeVowelsPresent',() => {
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