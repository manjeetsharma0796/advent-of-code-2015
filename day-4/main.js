const { findAnswerKey } = require("./src/answer-key-finder")

const main = () => {
  const partOne = findAnswerKey('yzbqklnj', 5);
  const partTwo = findAnswerKey('yzbqklnj', 6);

  console.log('The answer key for "yzbqklnj" with five zeroes in begin is', partOne);
  console.log('The answer key for "yzbqklnj" with six zeroes in begin is', partTwo);
}

main();