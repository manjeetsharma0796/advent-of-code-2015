const fs = require("fs");
const { calculateTotalPaperArea, calculateTotalRibbonLength } = require("./src/paper-area-calculator");

const main = () => {
  const rawBoxDimensionsSet = fs.readFileSync("./resources/box-dimensions.txt", "utf-8").split("\n");
  const totalPaperArea = calculateTotalPaperArea(rawBoxDimensionsSet);
  const totalRibbonLength = calculateTotalRibbonLength(rawBoxDimensionsSet);

  console.log("PART 1: The total wrapper paper area required is :", totalPaperArea);
  console.log("PART 2: The total ribbon length required is :", totalRibbonLength);
};

main();