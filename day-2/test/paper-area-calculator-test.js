const { describe, it } = require('node:test');
const { strictEqual, deepStrictEqual } = require('assert');
const { calculatePaperArea, calculateAllSidesArea, calculateSurfaceAreaOfBox, getMinimumArea } = require('../src/paper-area-calculator');

describe('calculatePaperArea', () => {
  it('Should give total of 0 square feet for box with dimensions 0x0x0', () => {
    const actual = calculatePaperArea('0x0x0');
    const expected = 0;

    strictEqual(actual, expected);
  });

  it('Should give total of 58 square feet for box with dimensions 2x3x4', () => {
    const actual = calculatePaperArea('2x3x4');
    const expected = 58;

    strictEqual(actual, expected);
  });

  it('Should give total of 43 square feet for box with dimensions 1x1x10', () => {
    const actual = calculatePaperArea('1x1x10');
    const expected = 43;

    strictEqual(actual, expected);
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
  it('Should give 0 as surface area, when length,width and height are 0', () => {
    const length = 0;
    const width = 0;
    const height = 0;

    const actual = calculateSurfaceAreaOfBox(length, width, height);
    const expected = 0;

    strictEqual(actual, expected);
  })

  it('Should give 42 as surface area, when length, width and height are 1, 1, 10 respectively', () => {
    const length = 1;
    const width = 1;
    const height = 10;

    const actual = calculateSurfaceAreaOfBox(length,width, height);
    const expected = 42;

    strictEqual(actual, expected);
  })
})

describe('getMinimumArea', () => {
  it('Should give minimum area when different length, width and height provided', () => {
    const length = 1;
    const width = 2;
    const height = 3;

    const actual = getMinimumArea(length, width, height);
    const expected = 2;

    strictEqual(actual, expected);
  })

  it('Should give minimum area when same length, width and height provided', () => {
    const length = 1;
    const width = 1;
    const height = 1;

    const actual = getMinimumArea(length, width, height);
    const expected = 1;

    strictEqual(actual, expected);
  })
})