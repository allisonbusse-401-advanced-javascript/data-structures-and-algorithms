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
    while(currentNode.next) {
      string = string + currentNode.value;
      currentNode = currentNode.next;
    } string = string + currentNode.value;
    return string;
  }

  /**
   * @param value
   */
  append(value) {
    const node = new Node(value);
    if(this.head === null) {
      this.head = node;
    }
    else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.size++;
    }
  }

  insertBefore(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    if(this.head === null) {
      this.head = node;
    } else if(this.head.value === value) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return node;
    }
    while(currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    this.size++;
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;
    if(this.head === null) {
      this.head = node;
    }
    while(currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    this.size++;
  }

  kthFromEnd(k) {
    const exception = 'exception';
    let count = 1;
    let currentNode = this.head;
    if(k >= this.size || k < 0 || typeof k !== 'number') {
      return exception;
    } 
    while(this.size - k !== count && currentNode.next !== null) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode.value;
  }
}

module.exports = { 
  Node,
  LinkedList,
};