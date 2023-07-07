const fs = require('fs');
const { calculateTotalPaperArea } = require("./src/paper-area-calculator");

const main = () => {
  const rawBoxDimensionsSet = fs.readFileSync('./resources/box-dimensions.txt', 'utf-8').split('\n');
  const totalPaperArea = calculateTotalPaperArea(rawBoxDimensionsSet);

  console.log('PART 1: The total wrapper paper area required is :', totalPaperArea);
}

main();