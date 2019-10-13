class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }


  preOrder(root, result = []) {
    if (root) {
      result.push(root.value);
      if (root.left) this.preOrder(root.left, result);
      if (root.right) this.preOrder(root.right, result);
    }
    return result;
  }

  inOrder() {
    return inOrderHelper(this.root, '').split('');
  }

  postOrder() {
    return postOrderHelper(this.root, '').split('');
  }

  findMaximum(root, result = []) {
    if (root) {
      result.push(root.value);
      if (root.left) this.preOrder(root.left, result);
      if (root.right) this.preOrder(root.right, result);
    }
    const max = Math.max.apply(Math.max, result);
    return max;
  }

}


function inOrderHelper(current, str) {
  if (current.left) str = inOrderHelper(current.left, str);
  if (current) str += current.value;
  if (current.right) str = inOrderHelper(current.right, str);
  return str;
}


function postOrderHelper(current, str) {
  if (current.left) str = postOrderHelper(current.left, str);
  if (current.right) str = postOrderHelper(current.right, str);
  if (current) str += current.value;
  return str;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let currentNode = this.root;
    return recurse(value, currentNode);
  }

  contains(value) {
    let currentNode = this.root;
    return containRecurse(value, currentNode);
  }
}

function containRecurse(value, currentNode) {
  let direction;
  if (value === currentNode.value) return true;
  if (value < currentNode.value) direction = 'left';
  else direction = 'right';
  if (currentNode[direction]) return containRecurse(value, currentNode[direction]);
  else return false;
}

function recurse(value, currentNode) {
  let direction;
  if (value < currentNode.value) direction = 'left';
  else direction = 'right';
  if (currentNode[direction]) { return recurse(value, currentNode[direction]); }
  return currentNode[direction] = new Node(value);
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};