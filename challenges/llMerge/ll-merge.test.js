const mergeLists = require('./ll-merge');
const linkedListModel = require('../linkedList/linked-list');


describe('Merge Lists', () => {
  it('merges two lists of the same size', () => {
    const list1 = new linkedListModel.LinkedList();
    list1.insert(5);
    list1.insert('hello');
    list1.insert('no');

    const list2 = new linkedListModel.LinkedList();
    list2.insert(8);
    list2.insert('goodbye');
    list2.insert('yes');
    list2.insert('alex');
    const result = mergeLists(list1, list2);
    expect(result.value).toBe('no');
    expect(result.next.value).toBe('alex');
    expect(result.next.next.value).toBe('hello');
    expect(result.next.next.next.value).toBe('yes');
    expect(result.next.next.next.next.value).toBe('goodbye');
    expect(result.next.next.next.next.next.value).toBe(5);
    expect(result.next.next.next.next.next.next.value).toBe(8);
  });
});