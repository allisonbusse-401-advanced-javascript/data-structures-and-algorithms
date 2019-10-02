const { AnimalShelter } = require('./fifo-animal-shelter');
const { Node } = require('../stacksAndQueues/stacks-and-queues');

describe('Animal Shelter Model', () => {
  it('adds an animal to the appropriate queue', () => {
    const shelter = new AnimalShelter();
    const testDog = {name: 'spot', type: 'dog'};
    const testDogTwo = {name: 'mitch', type: 'dog'};
    const testDogThree = {name: 'timber', type: 'dog'};
    const testCat = {name: 'truffle', type: 'cat'};
    const testCatTwo = {name: 'bella', type: 'cat'};
    const testCatThree = {name: 'lulu', type: 'cat'};
    shelter.dogs.enqueue(testDog);
    shelter.dogs.enqueue(testDogTwo);
    shelter.cats.enqueue(testCatTwo);
    shelter.cats.enqueue(testCatThree);
    shelter.enqueue(testCat);
    shelter.enqueue(testDogThree);
    expect(shelter.cats.front.next.next.value).toBe('truffle');
    expect(shelter.dogs.front.next.next.value).toBe('timber');
  });
});