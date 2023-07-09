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
  }, {})
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
  return false;
}

module.exports = {
  isThreeVowelsPresent,
  isAnyLetterRepeatInRow
}