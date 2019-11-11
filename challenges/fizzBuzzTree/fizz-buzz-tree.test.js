const { Node, BinaryTree } = require('../tree/tree');
const fizzBuzzTree = require('./fizz-buzz-tree');

describe('FizzBuzz Tree', () => {

  it('replaces tree values as intended', () => {
    const tree = new BinaryTree;
    tree.root = new Node(15);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    fizzBuzzTree(tree);
    expect(tree.root.value).toBe('FizzBuzz');
    expect(tree.root.left.value).toBe(7);
    expect(tree.root.left.right.value).toBe('Fizz');
    expect(tree.root.right.value).toBe('Buzz');
    expect(tree.root.right.right.value).toBe('Fizz');
    expect(tree.root.right.right.left.value).toBe(4);
  });

});

