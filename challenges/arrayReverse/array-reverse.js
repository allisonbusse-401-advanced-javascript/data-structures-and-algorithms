// eslint-disable-next-line no-unused-vars
function reverseArray(arr) {
  let array = [];
  let index = 0;
  for(let i = arr.length - 1; i >= 0; i-- ) {
    array[index] = arr[i];
    index += 1;
  }
  return array;
}

