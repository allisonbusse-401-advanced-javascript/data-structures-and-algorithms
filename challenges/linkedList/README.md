# Linked List
This is a class with several methods to deal with nodes and linked lists. 

## Challenge
Create a class to make a new linked list, and within it include methods to insert a value as the head node of the list, check to see if a linked list includes a certain value, and return all values in a linked list. 

## Approach & Efficiency
I created a new class and set the size to 0 and the head item to a value of null. 
- insert method: create a new Node with the given value, move the current head to the next position, and then set the head to the newly created node, then increasing the size of the list.
- includes method: set a variable for the head node, then loop through all of the nodes starting at the head to see if the given value matches the value of that node. If yes, return true, if not move on to the next node. 
- toString method: Set an empty string, and set a variable for the head node, then loop through all the nodes and add the valeue of the node to the string, then set the currentNode variable to the next node. Finally return the string. 

