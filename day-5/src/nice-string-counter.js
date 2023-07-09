const isThreeVowelsPresent = (string) => {
  if (!string) {
    return false;
  }

  const stringSummary = [...string].reduce((stringSummary, letter) => {
    if (stringSummary[letter] === undefined) {
      stringSummary[letter] = 1;
      return stringSummary;
    }
    stringSummary[letter] += 1;
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
  if (!string) {
    return false;
  }

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

const isRestrictedStringPresent = (stringToCheck, restrictedSubstrings) => {
  if (!stringToCheck) {
    return false;
  }

  for (const restrictedSubstring of restrictedSubstrings) {
    if (stringToCheck.includes(restrictedSubstring)) {
      return true;
    }
  }

  return false;
}

const countNiceString = (string, restrictedSubstring) => {
  if (!string) {
    return 0;
  }

  const firstCriteria = isThreeVowelsPresent(string);
  const secondCriteria = isAnyLetterRepeatInRow(string);
  const thirdCriteria = !isRestrictedStringPresent(string, restrictedSubstring);

  const allCriteriaMeet = [firstCriteria, secondCriteria, thirdCriteria]
    .every((value) => {
      return value;
    });

  if (allCriteriaMeet) {
    return 1;
  }

  return 0;
}

module.exports = {
  isThreeVowelsPresent,
  isAnyLetterRepeatInRow,
  isRestrictedStringPresent,
  countNiceString
}