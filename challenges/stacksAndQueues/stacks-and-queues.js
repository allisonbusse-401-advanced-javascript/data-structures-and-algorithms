class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  /** 
   * Push a new node to the top of the stack
   * @param value
   */
  push(value) {
    const node = new Node(value);
    if (!this.top) this.top = node;
    else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    let result;
    if (this.top) {
      result = this.top.value;
      this.top = this.top.next;
    }
    else result = null;
    return result;
  }

  peek() {
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    let currentNode = this.front;
    if(!currentNode) {
      this.front = newNode;
    }
    else {

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  }

  dequeue() {
    let currentNode = this.front;
    let result;
    if(!currentNode) {
      return 'queue is empty';
    } else {

      result = currentNode.value;
      this.front = currentNode.next;
    }
    return result;

  }

  peek() {
    return this.front.value;

  }
}


  


module.exports = {
  Node,
  Stack,
  Queue,
};