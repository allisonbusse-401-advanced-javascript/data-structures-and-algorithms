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
    if (animal.type === 'dog') {
      this.dogs.enqueue(animal.name);
    }
    else if (animal.type === 'cat') {
      this.cats.enqueue(animal.name);
    }
  }

  dequeue(pref) {
    if(pref === 'dog') {
      if(!this.dogs.peek()) return 'there are no more cats!';
      if(this.dogs.peek()) return this.dogs.dequeue();
    }
    if(pref === 'cat') {
      if(!this.cats.peek()) return 'there are no more cats!';
      if(this.cats.peek()) {
        return this.cats.dequeue();
      }
    }
    else return null;
  }

}

module.exports = {
  AnimalShelter,
  Node,
};