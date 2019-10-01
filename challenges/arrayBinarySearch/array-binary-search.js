function binarySearch(array, search) {
  let startIndex = 0;
  let lastIndex = array.length - 1;
  
  while(startIndex <= lastIndex) {
    let middleIndex = Math.floor((startIndex + lastIndex) / 2);
    if(search === array[middleIndex]) {
      return middleIndex;
    } else if(search > array[middleIndex]) {
      startIndex = middleIndex + 1;
    } else if(search < array[middleIndex]) {
      lastIndex = middleIndex - 1;
    }
  }
  return -1;
}

const array = [4,8,15,16,23,42];
const search = 15;
const arrayTwo = [11,22,33,44,55,66,77];
const searchTwo = 90;

console.log(binarySearch(array, search));
console.log(binarySearch(arrayTwo, searchTwo));

module.exports = binarySearch;