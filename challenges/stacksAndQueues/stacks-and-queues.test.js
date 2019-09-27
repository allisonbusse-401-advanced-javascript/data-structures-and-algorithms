const { Node, Stack, Queue } = require('./stacks-and-queues');

describe('Stacks and Queues', () => {
  it('pushes a node onto the top of a stack', () => {

    const testStack = new Stack();
    testStack.push('sir');
    expect(testStack.top.value).toBe('sir');
  });

  it('pushes multiple nodes onto a stack', () => {
    const testStack = new Stack();
    testStack.push('hello');
    testStack.push('goodbye');
    testStack.push('sir');
    expect(testStack.top.value).toBe('sir');
    expect(testStack.top.next.value).toBe('goodbye');
    expect(testStack.top.next.next.value).toBe('hello');
  });

  it('pops a node off the top of a stack', () => {
    const testStack = new Stack();
    testStack.push('hello');
    testStack.push('goodbye');
    testStack.push('sir');
    const result = testStack.pop();
    expect(result).toBe('sir');
  });

  it('empties a stack after multiple pops', () => {
    const testStack = new Stack();
    testStack.push('hello');
    testStack.push('goodbye');
    testStack.push('sir');
    testStack.pop();
    testStack.pop();
    testStack.pop();
    const result = testStack.pop();
    expect(result).toBe(null);
  });

  it('peeks the top value of a stack', () => {
    const testStack = new Stack();
    testStack.push('hello');
    testStack.push('goodbye');
    testStack.push('sir');
    expect(testStack.peek()).toBe('sir');
  });

  it('can instatiate an empty stack', () => {
    const testStack = new Stack();
    expect(testStack.top).toBe(null);
  });

});

