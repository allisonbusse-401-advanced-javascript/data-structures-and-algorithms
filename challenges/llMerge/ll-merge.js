const linkedListModel = require('../linkedList/linked-list');

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

function mergeLists(list1, list2) {
  const newList = new linkedListModel.LinkedList();
  let currentOne = list1.head;
  let currentTwo = list2.head;

  while(currentOne.next !== null && currentTwo.next !== null) {
    newList.append(currentOne.value);
    newList.append(currentTwo.value);
    currentOne = currentOne.next;
    currentTwo = currentTwo.next;
  }
  newList.append(currentOne.value);
  newList.append(currentTwo.value);

  if(list1.size > list2.size) {
    currentOne = currentOne.next;
    while(currentOne.next) {
      newList.append(currentOne.value);
      currentOne = currentOne.next;
    }
    newList.append(currentOne.value);
  }

  if(list2.size > list1.size) {
    currentTwo = currentTwo.next;
    while(currentTwo.next) {
      newList.append(currentTwo.value);
      currentTwo = currentTwo.next;
    }
    newList.append(currentTwo.value);
  }
  
  console.log(newList.toString());
  return newList.head;
}

mergeLists(list1, list2);

module.exports = mergeLists;