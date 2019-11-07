const leftJoin = require('./left-join');
const HashTable = require('../hashtable/hashtable');

describe('Left Join Function', () => {
  it('finds the common values in two hash tables', () => {
    const tableOne = new HashTable();
    tableOne.set('fond', 'enamored');
    tableOne.set('wrath', 'anger');
    tableOne.set('diligent', 'employed');
    tableOne.set('outfit', 'garb');
    tableOne.set('guide', 'usher');

    const tableTwo = new HashTable();
    tableTwo.set('fond', 'averse');
    tableTwo.set('wrath', 'delight');
    tableTwo.set('diligent', 'idle');
    tableTwo.set('flow', 'jame');
    tableTwo.set('guide', 'usher');

    expect(leftJoin(tableOne, tableTwo)).toEqual([
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'usher'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
    ]);
  });
});