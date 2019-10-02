const { Queue } = require('../stacksAndQueues/stacks-and-queues');

// class Node {
//   constructor(value, type) {
//     this.value = value;
//     this.type = type;
//     this.next = null;
//   }
// }

class AnimalShelter {
  constructor(value) {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    if(animal.type === 'dog') {
      this.dogs.enqueue(animal.name);
    }
    else if(animal.type === 'cat') {
      this.cats.enqueue(animal.name);
    }
  }

  dequeue(pref) {
    if(pref === 'dog') {
      return this.dogs.dequeue();
    }
    else if(pref === 'cat') {
      return this.cats.dequeue();
    }
    else return null;
  }

}

module.exports = {
  AnimalShelter,
  Node,
};