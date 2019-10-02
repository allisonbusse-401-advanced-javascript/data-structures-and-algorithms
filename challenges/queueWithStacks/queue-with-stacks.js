const { Stack } = require('../stacksAndQueues/stacks-and-queues');


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
    while(this.inStack.top.next) {
      this.outStack.push(this.inStack.pop());
    }
    let result = this.inStack.top;
    this.inStack.pop();
    while(this.outStack.peek()) {
      this.inStack.push(this.outStack.pop());
    }
    return result;
  }
}

module.exports = {
  PseudoQueue,
};