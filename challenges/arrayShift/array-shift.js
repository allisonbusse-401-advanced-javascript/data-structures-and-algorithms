function insertShiftArray(arr, val) {
  const middle = Math.ceil(arr.length / 2);
  let newArr = [];
  for(let i = 0; i < middle; i++) {
    newArr[newArr.length] = arr[i];
  }
  newArr[newArr.length] = val;
  for(let i = middle; i < arr.length; i++) {
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}

function removeShiftArray(arr) {
  const middle = Math.floor(arr.length / 2);
  let newArr = [];
  let index = 0;
  for(let i = 0; i < middle; i++) {
    newArr[index] = arr[i];
    index += 1;
  }
  for(let i = middle + 1; i < arr.length; i++) {
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}


module.exports = {
  insertShiftArray, 
  removeShiftArray};