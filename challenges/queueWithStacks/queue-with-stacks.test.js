const { PseudoQueue } = require('./queue-with-stacks');

describe('Queue with Stacks Model', () => {
  it('enqueues a value into stack one', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.inStack.push('hello');
    pseudoQueue.inStack.push('bye');
    pseudoQueue.inStack.push('maybe');
    pseudoQueue.enqueue(5);
    expect(pseudoQueue.inStack.top.value).toBe('maybe');
    expect(pseudoQueue.inStack.top.next.value).toBe('bye');
    expect(pseudoQueue.inStack.top.next.next.value).toBe('hello');
    expect(pseudoQueue.inStack.top.next.next.next.value).toBe(5);
  });

  it('dequeues a stack', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.inStack.push('hello');
    pseudoQueue.inStack.push('bye');
    pseudoQueue.inStack.push('maybe');
    pseudoQueue.dequeue();
    expect(pseudoQueue.inStack.top.value).toBe('maybe');
    expect(pseudoQueue.inStack.top.next.value).toBe('bye');
    expect(pseudoQueue.inStack.top.next.next).toBe(null);
  });

});