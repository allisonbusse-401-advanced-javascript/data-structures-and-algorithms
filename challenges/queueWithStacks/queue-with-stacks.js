const { Node, Stack, Queue } = require('../stacksAndQueues/stacks-and-queues');


class PseudoQueue {
  constructor(value) {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(value) {
    while(this.inStack.peek()) {
      this.outStack.push(this.inStack.pop());
    }
    this.inStack.push(value);
    while(this.outStack.peek()) {
      this.inStack.push(this.outStack.pop());
    }
  }

  dequeue() {

  }
}

module.exports = {
  PseudoQueue,
};