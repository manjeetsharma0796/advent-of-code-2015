const { finsSuffixOfSecretKey } = require("./src/answer-key-finder")

const main = () => {
  const partOne = finsSuffixOfSecretKey('yzbqklnj', 5);
  const partTwo = finsSuffixOfSecretKey('yzbqklnj', 6);

  console.log('The answer key for "yzbqklnj" with five zeroes in begin is', partOne);
  console.log('The answer key for "yzbqklnj" with six zeroes in begin is', partTwo);
}

main();