const fs = require('fs');
const { calculatePaperArea } = require("./src/paper-area-calculator");

const main = () => {
  const rawBoxDimensionsSet = fs.readFileSync('./resources/box-dimensions.txt', 'utf-8').split('\n');
}

main();