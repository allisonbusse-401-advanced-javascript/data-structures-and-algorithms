const HashTable = require('./hashtable');


describe('Hash Table Tests', () => {
  it('hashes a key', () => {
    const testTable = new HashTable();
    expect(testTable.hash('allison')).toBe(82);
  });

  it('sets a key value pair', () => {
    const testTable = new HashTable();
    testTable.set('allison', 'busse');
    expect(testTable.get('allison')).toBe('busse');
  });

  it('sets a key value pair when the key already exists', () => {
    const testTable = new HashTable();
    testTable.set('allison', 'smith');
    expect(testTable.get('allison')).toBe('smith');
  });

  it('checks if a hash table contains a key', () => {
    const testTable = new HashTable();
    testTable.set('allison', 'smith');
    expect(testTable.contains('allison')).toBe(true);
    expect(testTable.contains('andy')).toBe(false);
  });
});

