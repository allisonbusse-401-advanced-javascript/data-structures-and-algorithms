function reverseArray(arr) {
    let array = [];
    let index = 0;
    for(let i = arr.length - 1; i >= 0; i-- ) {
        array[index] = input[i];
        index += 1;
    }
    return array;
}

