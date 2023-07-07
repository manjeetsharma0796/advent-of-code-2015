const { describe, it } = require('node:test');
const { strictEqual, deepStrictEqual } = require('assert');
const { calculatePaperArea, calculateAllSidesArea, calculateSurfaceAreaOfBox, findSlackArea, calculateRibbonLength } = require('../src/paper-area-calculator');

describe('calculatePaperArea', () => {
  it('Should be zero square feet for box with all dimensions 0', () => {
    const actual = calculatePaperArea('0x0x0');
    const expected = 0;

    strictEqual(actual, expected);
  });

  it('Should be non-zero for box with positive dimensions', () => {
    const actual = calculatePaperArea('2x3x4');
    const expected = 58;

    strictEqual(calculatePaperArea('2x3x4'), 58);
    strictEqual(calculatePaperArea('1x1x10'), 43);
  });
});

describe('calculateAllSidesArea', () => {
  it('Should give baseArea, lengthSideArea and widthSideArea as 0, when provided all dimensions are 0', () => {
    const length = 0;
    const width = 0;
    const height = 0;
    const actual = calculateAllSidesArea(length, width, height);
    const expected = { baseArea: 0, lengthSideArea: 0, widthSideArea: 0 };

    deepStrictEqual(actual, expected);
  });

  it('Should give baseArea as 1, lengthSideArea and widthSideArea as 0, when provided length and width are 1 and height is 0', () => {
    const length = 1;
    const width = 1;
    const height = 0;
    const actual = calculateAllSidesArea(length, width, height);
    const expected = { baseArea: 1, lengthSideArea: 0, widthSideArea: 0 };

    deepStrictEqual(actual, expected);
  });

  it('Should give lengthSideArea as 1, baseArea and widthSideArea as 0, when provided length and width are 1 and height is 0', () => {
    const length = 1;
    const width = 0;
    const height = 1;

    const actual = calculateAllSidesArea(length, width, height);
    const expected = { baseArea: 0, lengthSideArea: 1, widthSideArea: 0 };

    deepStrictEqual(actual, expected);
  });

  it('Should give widthSideArea as 1, baseArea and lengthSideArea as 0, when provided length and width are 1 and height is 0', () => {
    const length = 0;
    const width = 1;
    const height = 1;

    const actual = calculateAllSidesArea(length, width, height);
    const expected = { baseArea: 0, lengthSideArea: 0, widthSideArea: 1 };

    deepStrictEqual(actual, expected);
  });
});

describe('calculateSurfaceAreaOfBox', () => {
  it('Should give 0 surface area, when length,width and height are 0', () => {
    const length = 0;
    const width = 0;
    const height = 0;

    const actual = calculateSurfaceAreaOfBox(length, width, height);
    const expected = 0;

    strictEqual(actual, expected);
  })

  it('Should give surface area, when length, width and height are provided', () => {
    strictEqual(calculateSurfaceAreaOfBox(1, 1, 10), 42);
    strictEqual(calculateSurfaceAreaOfBox(2, 3, 4), 52)
  })
});

describe('findSlackArea', () => {
  it('Should give slack area when different length, width and height provided', () => {
    const length = 1;
    const width = 2;
    const height = 3;

    const actual = findSlackArea(length, width, height);
    const expected = 2;

    strictEqual(actual, expected);
  });

  it('Should give slack area when same length, width and height provided', () => {
    const length = 1;
    const width = 1;
    const height = 1;

    const actual = findSlackArea(length, width, height);
    const expected = 1;

    strictEqual(actual, expected);
  });
});

describe('calculateRibbonLength', () => {
  it('Should be length as 0 as when non existing dimension provided', () => {
    const rawBoxDimension = '0x0x0';
    strictEqual(calculateRibbonLength(rawBoxDimension), 0);
  });

  it('Should be length as non-zero as when existing dimension provided', () => {
    strictEqual(calculateRibbonLength('1x1x1'), 5);
    strictEqual(calculateRibbonLength('2x3x4'), 34);
    strictEqual(calculateRibbonLength('1x1x10'), 14);
  });
})