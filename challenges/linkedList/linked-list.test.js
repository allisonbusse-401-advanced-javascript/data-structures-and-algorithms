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

    console.log(list.insertBefore())
  });
});

