const { AnimalShelter } = require('./fifo-animal-shelter');

describe('Animal Shelter Model', () => {
  it('adds an animal to the appropriate queue', () => {
    const shelter = new AnimalShelter();
    const testDog = { name: 'spot', type: 'dog' };
    const testDogTwo = { name: 'mitch', type: 'dog' };
    const testDogThree = { name: 'timber', type: 'dog' };
    const testCat = { name: 'truffle', type: 'cat' };
    const testCatTwo = { name: 'bella', type: 'cat' };
    const testCatThree = { name: 'lulu', type: 'cat' };
    shelter.dogs.enqueue(testDog);
    shelter.dogs.enqueue(testDogTwo);
    shelter.cats.enqueue(testCatTwo);
    shelter.cats.enqueue(testCatThree);
    shelter.enqueue(testCat);
    shelter.enqueue(testDogThree);
    expect(shelter.cats.front.next.next.value).toBe('truffle');
    expect(shelter.dogs.front.next.next.value).toBe('timber');
  });

  it('removes an animal based on preference', () => {
    const shelter = new AnimalShelter();
    const testDog = { name: 'spot', type: 'dog' };
    const testDogTwo = { name: 'mitch', type: 'dog' };
    const testDogThree = { name: 'timber', type: 'dog' };
    const testCat = { name: 'truffle', type: 'cat' };
    const testCatTwo = { name: 'bella', type: 'cat' };
    const testCatThree = { name: 'lulu', type: 'cat' };
    shelter.dogs.enqueue(testDog);
    shelter.dogs.enqueue(testDogTwo);
    shelter.dogs.enqueue(testDogThree);
    shelter.cats.enqueue(testCat);
    shelter.cats.enqueue(testCatTwo);
    shelter.cats.enqueue(testCatThree);
    const removedDog = shelter.dequeue('dog');
    const removedCat = shelter.dequeue('cat');
    const removedCatTwo = shelter.dequeue('cat');
    const removedCatThree = shelter.dequeue('cat');
    const removedCatFour = shelter.dequeue('cat');
    expect(removedDog.name).toEqual('spot');
    expect(removedCat.name).toEqual('truffle');
    expect(removedCatTwo.name).toEqual('bella');
    expect(removedCatThree.name).toEqual('lulu');
    expect(removedCatFour).toEqual('there are no more cats!');
  });
});