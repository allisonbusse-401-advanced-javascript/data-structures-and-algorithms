const linkedListModel = require('./linked-list');

describe('Linked List', () => {
  it('instantiates a new empty list', () => {
    const list = new linkedListModel.LinkedList();
    
    const result = {
      head: null,
      size: 0,
    };
    expect(list).toEqual(result);
  });

  it('inserts value into list', () => {
    const value = 5;
    const list = new linkedListModel.LinkedList();
    list.insert(value);
    expect(list.size).toBe(1);
  });

  it('head property points to first value', () => {
    const value = 5;
    const list = new linkedListModel.LinkedList();
    list.insert(value);
    expect(list.head.value).toBe(value);
  });

  it('can insert multiple nodes', () => {
    const list = new linkedListModel.LinkedList();
    const valueOne = 5;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    expect(list.size).toBe(3);
  });

  it('will return true when finding a value in a list', () => {
    const list = new linkedListModel.LinkedList();
    list.insert(5);
    expect(list.includes(5)).toBe(true);
  });

  it('will return false for value that does not exist', () => {
    const list = new linkedListModel.LinkedList();
    list.insert(5);
    expect(list.includes(4)).toBe(false);
  });

  it('returns all values in a list', () => {
    const list = new linkedListModel.LinkedList();
    const valueOne = 5;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    expect(list.toString()).toBe('nohello5');
  });

  it('adds a node to the end of a list', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    expect(list.size).toBe(4);
    expect(list.head.next.next.next.value).toBe('abbey');
  });

  it('adds multiple nodes to the end of a list', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueEnd = 'allison';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    list.append(valueEnd);
    expect(list.size).toBe(5);
    expect(list.head.next.next.next.value).toBe('abbey');
    expect(list.head.next.next.next.next.value).toBe('allison');
  });

  it('can insert a node after a node in the middle of a list', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    list.insertAfter('hello', 'goodbye');
    expect(list.head.next.next.value).toBe('goodbye');
    expect(list.size).toBe(5);
    expect(list.includes('goodbye')).toBe(true);
    expect(list.toString()).toBe('nohellogoodbye6abbey');
  });

  it('can insert a node before the first node in a list', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    list.insertBefore('no', 'goodbye');
    expect(list.size).toBe(5);
    expect(list.includes('goodbye')).toBe(true);
    expect(list.toString()).toBe('goodbyenohello6abbey');
  });

  it('can insert a node before a node in the middle of a list', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    list.insertBefore('hello', 'goodbye');
    expect(list.head.next.value).toBe('goodbye');
    expect(list.includes('goodbye')).toBe(true);
    expect(list.toString()).toBe('nogoodbyehello6abbey');
  });

  it('can insert a node after the last node in a list', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    list.insertAfter('abbey', 'goodbye');
    expect(list.head.next.next.next.next.value).toBe('goodbye');
    expect(list.includes('goodbye')).toBe(true);
  });

  it('tests where k is greater than the length of list', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    expect(list.kthFromEnd(6)).toBe('exception');
  });

  it('tests where k is equal to the length of list', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    expect(list.kthFromEnd(4)).toBe('exception');
  });

  it('tests where k is not a positive integer', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    expect(list.kthFromEnd(-5)).toBe('exception');
    expect(list.kthFromEnd('test')).toBe('exception');
  });

  it('tests where the linked list is a length of 1', () => {
    const list = new linkedListModel.LinkedList();
    const valueOne = 6;
    list.insert(valueOne);
    expect(list.kthFromEnd(1)).toBe('exception');
    expect(list.kthFromEnd(0)).toBe(6);
  });

  it('tests where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new linkedListModel.LinkedList();
    const value = 'abbey';
    const valueOne = 6;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.append(value);
    expect(list.kthFromEnd(2)).toBe('hello');
    expect(list.kthFromEnd(3)).toBe('no');
  });



});

