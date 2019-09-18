const shiftArray = require('./array-shift');

const arr = [2,4,6,8];
const val = 5;

describe('shift and insert into array', () => {
  it('inserts value into middle of given array', () => {
    expect(shiftArray.insertShiftArray(arr, val)).toEqual([2, 4, 5, 6, 8]);
  });
});

const arrTwo = [4, 8, 15, 23, 42];
const valTwo = 16;

describe('shift and insert into array', () => {
  it('inserts value into middle of given array', () => {
    expect(shiftArray.insertShiftArray(arrTwo, valTwo)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});


describe('shift and insert into array', () => {
  it('inserts value into middle of given array', () => {
    expect(shiftArray.removeShiftArray(arrTwo)).toEqual([4, 8, 23, 42]);
  });
});

describe('shift and insert into array', () => {
  it('inserts value into middle of given array', () => {
    expect(shiftArray.removeShiftArray(arr)).toEqual([2, 4, 8]);
  });
});