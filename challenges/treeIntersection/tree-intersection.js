
function treeIntersection(firstTree, secondTree) {
  const arr = firstTree.preOrder(firstTree.root);
  const arrTwo = secondTree.preOrder(secondTree.root);
  const resultsArr = [];
  for(let i = 0; i < arr.length; i ++) {
    if(arrTwo.includes(arr[i])) resultsArr.push(arr[i]);
  }
  return resultsArr;
}

module.exports = treeIntersection;

