const calculateAllSidesArea = (length, width, height) => {
  const baseArea = length * width;
  const lengthSideArea = length * height;
  const widthSideArea = width * height;
  return { baseArea, lengthSideArea, widthSideArea };
}

const findSlackArea = (length, width, height) => {
  const { baseArea, lengthSideArea, widthSideArea } = calculateAllSidesArea(length, width, height);
  return Math.min(baseArea, lengthSideArea, widthSideArea);
}

const calculateSurfaceAreaOfBox = (length, width, height) => {
  return 2 * (length * width + width * height + height * length);
}

const calculatePaperArea = (rawBoxDimension) => {
  const [length, width, height] = rawBoxDimension.split('x')
    .map(numberInString => parseInt(numberInString));
  const minimumArea = findSlackArea(length, width, height);

  const surfaceAreaOfBox = calculateSurfaceAreaOfBox
    (length, width, height);
  const paperArea = surfaceAreaOfBox + minimumArea;

  return paperArea;
}

const calculateTotalPaperArea = (rawBoxDimensionsSet) => {
  return rawBoxDimensionsSet.reduce((totalPaperArea, rawBoxDimension) => {
    totalPaperArea += calculatePaperArea(rawBoxDimension);
    return totalPaperArea;
  }, 0);
}

module.exports = {
  calculateAllSidesArea,
  findSlackArea,
  calculateSurfaceAreaOfBox,
  calculatePaperArea,
  calculateTotalPaperArea
}