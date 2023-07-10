const fs = require('fs');
const { isStringNice, countNiceStrings } = require("./src/nice-string-counter");

const main = () => {
  const fileContent = fs.readFileSync('./resources/strings-input.txt', 'utf-8');

  const strings = fileContent.split('\n');
  const niceStringsCount = countNiceStrings(strings, ['ab', 'cd', 'pq', 'xy']);

  console.log('Part 1: Total nice string present is ', niceStringsCount);
}

main();