class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /**
   * Insert a value at the head of a list
   * @param value 
   */
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++; 
  }

  /**
   * It checks to see if a list includes a given value?
   * @param value 
   * @returns {boolean}
   */

  includes(value) {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      if(currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    } return false;
  }

  /**
   * Turns all values from a list into a string
   * @returns {string}
   */
  toString() {
    let string = '';
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      string = string + currentNode.value;
      currentNode = currentNode.next;
    } return string;
  }

  /**
   * @param value
   */
  append(value) {
    const node = new Node(value);
 
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.size++;
  }

  insertBefore(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    while(currentNode.value !== value) {
      currentNode = currentNode.next;
      // currentNode = node;
    }
    currentNode = node;
  }
}

module.exports = { 
  Node,
  LinkedList,
};