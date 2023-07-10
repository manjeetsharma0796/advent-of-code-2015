const fs = require('fs');
const { countNiceString } = require("./src/nice-string-counter");

const main = () => {
  const rawStrings = fs.readFileSync('./resources/strings-input.txt', 'utf-8');

  const strings = rawStrings.split('\n');
  const niceStringsCount = strings.reduce((count, string) => {
    count += countNiceString(string, ['ab', 'cd', 'pq', 'xy']);
    return count;
  }, 0);

  console.log('Total nice string present is ', niceStringsCount);
}

main();