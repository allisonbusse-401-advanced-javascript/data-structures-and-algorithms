const treeIntersection = require('./tree-intersection');
const { Node, BinaryTree } = require('../tree/tree');


describe('Testing Tree Intersection Function', () => {
  it('returns an array of values that appear in both tress', () => {
    const tree = new BinaryTree;
    tree.root = new Node(150);
    tree.root.left = new Node(100);
    tree.root.right = new Node(250);
    tree.root.right.left = new Node(200);
    tree.root.right.right = new Node(350);
    tree.root.right.right.left = new Node(300);
    tree.root.right.right.right = new Node(500);
    tree.root.left.left = new Node(75);
    tree.root.left.right = new Node(160);
    tree.root.left.right.left = new Node(125);
    tree.root.left.right.right = new Node(175);

    const treeTwo = new BinaryTree;
    treeTwo.root = new Node(42);
    treeTwo.root.left = new Node(100);
    treeTwo.root.right = new Node(600);
    treeTwo.root.right.left = new Node(200);
    treeTwo.root.right.right = new Node(350);
    treeTwo.root.right.right.left = new Node(4);
    treeTwo.root.right.right.right = new Node(500);
    treeTwo.root.left.left = new Node(15);
    treeTwo.root.left.right = new Node(160);
    treeTwo.root.left.right.left = new Node(125);
    treeTwo.root.left.right.right = new Node(175);
    expect(treeIntersection(tree, treeTwo)).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });
});