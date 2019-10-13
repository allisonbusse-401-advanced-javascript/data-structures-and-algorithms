# Linked List
This is a class with several methods to deal with nodes and linked lists. 

## Challenge
Create a class to make a new linked list, and within it include methods to insert a value as the head node of the list, check to see if a linked list includes a certain value, and return all values in a linked list. 
Second challenge: append a new node to the end of a list, insert a node before a certain value in the list, insert a node after a certain value in the list.
Third challenge: find the value of the nth item from the end of the list. 

## Approach & Efficiency
I created a new class and set the size to 0 and the head item to a value of null. 
- insert method: create a new Node with the given value, move the current head to the next position, and then set the head to the newly created node, then increasing the size of the list.
- includes method: set a variable for the head node, then loop through all of the nodes starting at the head to see if the given value matches the value of that node. If yes, return true, if not move on to the next node. 
- toString method: Set an empty string, and set a variable for the head node, then loop through all the nodes and add the valeue of the node to the string, then set the currentNode variable to the next node. Finally return the string. 
- append method: Create a new node, and set a variable of a current node equal to the head node. Then set a while loop to increment the current node for as long as a next node exists. When the next node does not exist, set it to the newly created node and increment the size of the list.
- insertBefore method: Create a new node and set a variable of a current node equal to the head node. If the head node doesn't exist, set the new node to the head. If the head node is the value we want, set the node to the head. Then set a while loop to increment through the list until we find the node before the value we want. Once found, set the next value of the new node to the next of the current node, then make the new node the next node. 
- insertAfter method: Create a new node and set a variable of a current node equal to the head node. If the head node doesn't exist, set the new node to the head. Then set a while loop to increment through the list until we find the node with the value we want. Once found, set the next value of the new node to the next of the current node, then make the new node the next node.
- kthFromEnd method: Set an error message, a counter, and set a current node variable equal to this.head. Have to check for a lot of edge cases, including if k is greater than the lenght of the list, less than 0, or not a number. In these cases, return the error. If k is the length of the list, iterate through the list until you return the last value. Otherwise iterate through the list until you find the node that's equal to the length minus k, and return that node's value.

