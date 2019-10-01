const binarySearch = require('./array-binary-search.js');

const array = [4,8,15,16,23,42];
const search = 15;
const arrayTwo = [11,22,33,44,55,66,77];
const searchTwo = 90;

describe('search for value in array ', () => {
  it('returns index of given value', () => {
    expect(binarySearch(array, search)).toEqual(2);
  });
  it('returns -1', () => {
    expect(binarySearch(arrayTwo, searchTwo)).toEqual(-1);
  });
});