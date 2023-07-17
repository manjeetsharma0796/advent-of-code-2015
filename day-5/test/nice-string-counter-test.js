const { describe, it } = require("node:test");
const assert = require("assert");

const { areThreeVowelsPresent,
  isAnyLetterRepeatInRow,
  isAnyRestrictedSubstringPresent,
  isStringNice,
  countNiceStrings,
  isPairOfLettersRepeatedTwice,
  anyLetterRepeatedAfterALetter,
  isStringNiceWithNewRule,
  countNiceStringsWithNewRule
} = require("../src/nice-string-counter");

describe("areThreeVowelsPresent", () => {
  it("Should be false as no string provided", () => {
    assert.strictEqual(areThreeVowelsPresent(), false);
  });

  it("Should be false as string provided has no vowels", () => {
    assert.strictEqual(areThreeVowelsPresent("bc"), false);
  });

  it("Should be false as string provided has two vowels only", () => {
    assert.strictEqual(areThreeVowelsPresent("aep"), false);
  });

  it("Should be true as string provided has three vowels only", () => {
    assert.strictEqual(areThreeVowelsPresent("aepo"), true);
  });

  it("Should be true as string provided has three identical vowels", () => {
    assert.strictEqual(areThreeVowelsPresent("aaa"), true);
  });
});

describe("isAnyLetterRepeatInRow", () => {
  it("Should be false as no string provided", () => {
    assert.strictEqual(isAnyLetterRepeatInRow(), false);
  });

  it("Should be false as string provided has no repeating letter in row", () => {
    assert.strictEqual(isAnyLetterRepeatInRow("seb"), false);
    assert.strictEqual(isAnyLetterRepeatInRow("sefs"), false);
  });

  it("Should be true as string provided has repeating letter in row", () => {
    assert.strictEqual(isAnyLetterRepeatInRow("sseb"), true);
    assert.strictEqual(isAnyLetterRepeatInRow("sebb"), true);
    assert.strictEqual(isAnyLetterRepeatInRow("seebb"), true);
  });
});

describe("isAnyRestrictedSubstringPresent", () => {
  it("Should be false as string provided has no restricted substring", () => {
    assert.strictEqual(isAnyRestrictedSubstringPresent("", ["ab", "cd", "pq", "xy"]), false);
    assert.strictEqual(isAnyRestrictedSubstringPresent("aob", ["ab", "cd", "pq", "xy"]), false);
  });

  it("Should be true as string provided has restricted substring", () => {
    assert.strictEqual(isAnyRestrictedSubstringPresent("ab", ["ab", "cd", "pq", "xy"]), true);
    assert.strictEqual(isAnyRestrictedSubstringPresent("cicd", ["ab", "cd", "pq", "xy"]), true);
    assert.strictEqual(isAnyRestrictedSubstringPresent("cpqi", ["ab", "cd", "pq", "xy"]), true);
    assert.strictEqual(isAnyRestrictedSubstringPresent("cxyd", ["ab", "cd", "pq", "xy"]), true);
  });
});

describe("isStringNice", () => {
  it("Nice String count should be zero for empty string", () => {
    assert.strictEqual(isStringNice("", ["ab", "cd", "pq", "xy"]), false);
  });

  it("Nice String count should be zero for string provided that fails to meets all criteria", () => {
    assert.strictEqual(isStringNice("", ["ab", "cd", "pq", "xy"]), false);
    assert.strictEqual(isStringNice("jchzalrnumimnmhp", ["ab", "cd", "pq", "xy"]), false);
    assert.strictEqual(isStringNice("haegwjzuvuyypxyu", ["ab", "cd", "pq", "xy"]), false);
    assert.strictEqual(isStringNice("dvszwmarrgswjxmb", ["ab", "cd", "pq", "xy"]), false);
  });

  it("Nice String count should be one for string that meets all criteria", () => {
    assert.strictEqual(isStringNice("ugknbfddgicrmopn", ["ab", "cd", "pq", "xy"]), true);
    assert.strictEqual(isStringNice("aaa", ["ab", "cd", "pq", "xy"]), true);
  });
});

describe("countNiceString", () => {
  it("count should be zero as the string provided is not nice", () => {
    assert.strictEqual(countNiceStrings([""], ["ab", "cd", "pq", "xy"]), 0);
    assert.strictEqual(countNiceStrings(["jchzalrnumimnmhp"], ["ab", "cd", "pq", "xy"]), 0);
    assert.strictEqual(countNiceStrings(["haegwjzuvuyypxyu"], ["ab", "cd", "pq", "xy"]), 0);
    assert.strictEqual(countNiceStrings(["dvszwmarrgswjxmb"], ["ab", "cd", "pq", "xy"]), 0);
  });

  it("count should be non zero value as strings provided has nice strings", () => {
    assert.strictEqual(countNiceStrings(["ugknbfddgicrmopn", "abckd"], ["ab", "cd", "pq", "xy"]), 1);
    assert.strictEqual(countNiceStrings(["ugknbfddgicrmopn", "aaaniio", "abckd"], ["ab", "cd", "pq", "xy"]), 2);
  });
});

describe("isPairOfLettersRepeatedTwice", () => {
  it("should be false as string provided is has no pair of letters repeated", () => {
    assert.strictEqual(isPairOfLettersRepeatedTwice("a"), false);
    assert.strictEqual(isPairOfLettersRepeatedTwice("ac"), false);
    assert.strictEqual(isPairOfLettersRepeatedTwice("aa"), false);
    assert.strictEqual(isPairOfLettersRepeatedTwice("aaa"), false);
  });

  it("should be true as string provided is has pair of letters repeated", () => {
    assert.strictEqual(isPairOfLettersRepeatedTwice("aaaa"), true);
    assert.strictEqual(isPairOfLettersRepeatedTwice("xyxy"), true);
    assert.strictEqual(isPairOfLettersRepeatedTwice("aabcdefgaa"), true);
  });
});

describe("anyLetterRepeatedAfterALetter", () => {
  it("Should be false as string provided has no letter repeated after a letter", () => {
    assert.strictEqual(anyLetterRepeatedAfterALetter("a"), false);
    assert.strictEqual(anyLetterRepeatedAfterALetter("aa"), false);
    assert.strictEqual(anyLetterRepeatedAfterALetter("aabca"), false);
  });

  it("Should be true as string provided has letter repeated after a letter", () => {
    assert.strictEqual(anyLetterRepeatedAfterALetter("aba"), true);
    assert.strictEqual(anyLetterRepeatedAfterALetter("abcdefeghi"), true);
    assert.strictEqual(anyLetterRepeatedAfterALetter("qjhvhtzxzqqjkmpb"), true);
  });
});

describe("isStringNiceWithNewRule", () => {
  it("Should be true as string provided has a pair repeated and exactly one letter between them", () => {
    assert.strictEqual(isStringNiceWithNewRule("qjhvhtzxzqqjkmpb"), true);
    assert.strictEqual(isStringNiceWithNewRule("xxyxx"), true);
  });

  it("Should be false because the string provided has no repeat with a single letter between them", () => {
    assert.strictEqual(isStringNiceWithNewRule("uurcxstgmygtbstg"), false);
    assert.strictEqual(isStringNiceWithNewRule("ieodomkazucvgmuy"), false);
  });
});

describe("countNiceStringWithNewRule", () => {
  it("count should be zero as the string provided is not nice", () => {
    assert.strictEqual(countNiceStringsWithNewRule([""],), 0);
    assert.strictEqual(countNiceStringsWithNewRule(["uurcxstgmygtbstg", "ieodomkazucvgmuy"]), 0);
  });

  it("count should be non zero value as strings provided has nice strings", () => {
    assert.strictEqual(countNiceStringsWithNewRule(["qjhvhtzxzqqjkmpb"]), 1);
    assert.strictEqual(countNiceStringsWithNewRule(["qjhvhtzxzqqjkmpb", "xxyxx"]), 2);
  });
});