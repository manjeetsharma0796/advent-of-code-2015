const fs = require('fs');
const { countNiceStrings, countNiceStringsWithNewRule } = require("./src/nice-string-counter");

const main = () => {
  const fileContent = fs.readFileSync('./resources/strings-input.txt', 'utf-8');

  const strings = fileContent.split('\n');
  const niceStringsCount = countNiceStrings(strings, ['ab', 'cd', 'pq', 'xy']);
  const niceStringWithNewRuleCount = countNiceStringsWithNewRule(strings);

  console.log('Part 1: Total nice string present is ', niceStringsCount);
  console.log('Part 2: Total nice string by new rules is ', niceStringWithNewRuleCount);

}

main();