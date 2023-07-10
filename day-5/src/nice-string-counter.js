const areThreeVowelsPresent = (string) => {
  if (!string) {
    return false;
  }

  const stringSummary = [...string].reduce((stringSummary, letter) => {
    if (stringSummary[letter] === undefined) {
      stringSummary[letter] = 1;
    } else {
      stringSummary[letter] += 1;
    }

    return stringSummary;
  }, {});

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  vowels.forEach((vowel) => {
    if (stringSummary[vowel]) {
      vowelCount += stringSummary[vowel];
    }
  })

  return vowelCount < 3 ? false : true;
}

const isAnyLetterRepeatInRow = (string) => {
  if (!string) return false;

  let letterIndex = 0;

  while (letterIndex < string.length - 1) {
    const currentLetter = string[letterIndex];
    const succedingLetter = string[letterIndex + 1];

    if (currentLetter === succedingLetter) {
      return true;
    }

    letterIndex++;
  }

  return false;
}

const isAnyRestrictedSubstringPresent = (stringToCheck, restrictedSubstrings) => {
  if (!stringToCheck) return false;

  return restrictedSubstrings.some((subString) => stringToCheck.includes(subString));
}

const isStringNice = (string, restrictedSubstring) => {
  if (!string) return false;

  const firstCriteria = areThreeVowelsPresent(string);
  const secondCriteria = isAnyLetterRepeatInRow(string);
  const thirdCriteria = !isAnyRestrictedSubstringPresent(string, restrictedSubstring);

  const criterias = [firstCriteria, secondCriteria, thirdCriteria];

  const allCriteriaMeet = criterias.every((value) => value);

  return allCriteriaMeet;
}

const countNiceStrings = (strings, restrictedSubstrings) => {
  return strings.reduce((niceStringsCount, string) => {
    if (isStringNice(string, restrictedSubstrings)) {
      niceStringsCount += 1;
    }

    return niceStringsCount;
  }, 0);
}

const isPairOfLettersRepeatedTwice = (string) => {
  return (/(..).*\1/).test(string);  
}

module.exports = {
  areThreeVowelsPresent,
  isAnyLetterRepeatInRow,
  isAnyRestrictedSubstringPresent,
  isStringNice,
  countNiceStrings,
  isPairOfLettersRepeatedTwice
}