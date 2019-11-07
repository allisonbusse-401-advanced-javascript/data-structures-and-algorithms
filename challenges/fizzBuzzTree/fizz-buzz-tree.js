
function fizzBuzzTree(tree) {
  return fizzBuzzHelper(tree.root, tree);
}

function fizzBuzzHelper(root, tree) {
  if (root) {
    if(root.value % 5 === 0 && root.value % 3 === 0) root.value = 'FizzBuzz';
    if(root.value % 3 === 0) root.value = 'Fizz';
    if(root.value % 5 === 0) root.value = 'Buzz';
    if(root.left) fizzBuzzHelper(root.left);
    if(root.right) fizzBuzzHelper(root.right);
  }
  return tree;
}

module.exports = fizzBuzzTree;