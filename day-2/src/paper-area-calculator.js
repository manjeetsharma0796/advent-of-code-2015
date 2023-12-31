const calculateAllSidesArea = (length, width, height) => {
  const baseArea = length * width;
  const lengthSideArea = length * height;
  const widthSideArea = width * height;
  return { baseArea, lengthSideArea, widthSideArea };
};

const findSlackArea = (length, width, height) => {
  const { baseArea, lengthSideArea, widthSideArea } = calculateAllSidesArea(length, width, height);
  return Math.min(baseArea, lengthSideArea, widthSideArea);
};

const calculateSurfaceAreaOfBox = (length, width, height) => {
  return 2 * (length * width + width * height + height * length);
};

const calculatePaperArea = (rawBoxDimension) => {
  const [length, width, height] = rawBoxDimension.split("x")
    .map(numberInString => parseInt(numberInString));
  const minimumArea = findSlackArea(length, width, height);

  const surfaceAreaOfBox = calculateSurfaceAreaOfBox(length, width, height);
  const paperArea = surfaceAreaOfBox + minimumArea;

  return paperArea;
};

const calculateTotalPaperArea = (rawBoxDimensionsSet) => {
  let totalPaperArea = 0;

  for (const rawBoxDimension of rawBoxDimensionsSet) {
    totalPaperArea += calculatePaperArea(rawBoxDimension);
  }

  return totalPaperArea;
};

const calculateRibbonLength = (rawBoxDimension) => {
  const [length, width, height] = rawBoxDimension.split("x")
    .map(numberInString => parseInt(numberInString));
  const largeSide = Math.max(length, width, height);

  const ribbonToWrap = 2 * ((length + width + height) - largeSide);
  const ribbonForBow = length * width * height;

  return ribbonToWrap + ribbonForBow;
};

const calculateTotalRibbonLength = (rawBoxDimensionsSet) => {
  let totalRibbonLength = 0;
  for (const rawBoxDimension of rawBoxDimensionsSet) {
    totalRibbonLength += calculateRibbonLength(rawBoxDimension);
  }
 
  return totalRibbonLength;
};

module.exports = {
  calculateAllSidesArea,
  findSlackArea,
  calculateSurfaceAreaOfBox,
  calculatePaperArea,
  calculateTotalPaperArea,
  calculateRibbonLength,
  calculateTotalRibbonLength
};