const mergeLists = require('./ll-merge');
const linkedListModel = require('./linked-list');


describe('Merge Lists', () => {
  it('merges two lists of the same size', () => {
    const list1 = new linkedListModel.LinkedList();
    const valueOne = 5;
    const valueTwo = 'hello';
    const valueThree = 'no';
    list1.insert(valueOne);
    list1.insert(valueTwo);
    list1.insert(valueThree);

    const list2 = new linkedListModel.LinkedList();
    const valueFour = 8;
    const valueFive = 'goodbye';
    const valueSix = 'yes';
    list2.insert(valueFour);
    list2.insert(valueFive);
    list2.insert(valueSix);
    list2.insert('alex');
    mergeLists(list1, list2);
    expect(l)
  });
});