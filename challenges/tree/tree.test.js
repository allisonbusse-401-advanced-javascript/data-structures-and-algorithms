const { Node, BinaryTree, BinarySearchTree } = require('./tree');

describe('Tree Class', () => {

  it('instatiates an empty tree', () => {
    const tree = new BinaryTree;
    expect(tree.root).toBe(null);
  });

  it('instatiates a tree with a single root node', () => {
    const tree = new BinaryTree;
    tree.root = new Node('A');
    expect(tree.root.value).toBe('A');
  });

  it('can add a left and right child to a node', () => {
    const tree = new BinaryTree;
    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.right = new Node('C');
    expect(tree.root.value).toBe('A');
    expect(tree.root.left.value).toBe('B');
    expect(tree.root.right.value).toBe('C');
  });

  it('traverses a tree in pre-order', () => {
    const tree = new BinaryTree;
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.right.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    expect(tree.preOrder(tree.root)).toEqual(['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H']);

  });

  it('traverses a tree inorder', () => {
    const tree = new BinaryTree;
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.right.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    // eslint-disable-next-line comma-dangle
    expect(tree.inOrder()).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',]);

  });

  it('traverses a tree in postorder', () => {
    const tree = new BinaryTree;
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.right.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    expect(tree.postOrder(tree.root)).toEqual(['A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F']);

  });

  it('adds a value to a binary search tree', () => {
    const bTree = new BinarySearchTree;
    bTree.root = new Node('F');
    bTree.root.left = new Node('B');
    bTree.root.right = new Node('G');
    bTree.root.right.right = new Node('I');
    bTree.root.right.right.left = new Node('H');
    bTree.root.left.left = new Node('A');
    bTree.root.left.right = new Node('D');
    bTree.root.left.right.left = new Node('C');
    bTree.add('E');
    expect(bTree.root.left.right.right.value).toBe('E');
  });

  it('finds a value in a binary search tree', () => {
    const tree = new BinarySearchTree;
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.right.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    expect(tree.contains('E')).toBe(true);
    expect(tree.contains('L')).toBe(false);
  });

});