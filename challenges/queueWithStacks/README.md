# Queues with Stacks
This is a challenge to create a pseudo queue model with two stacks that serve as an in and out. 

## Challenge
Write a class for a pseudo queue which is made up of two stacks and takes a enqueue and dequeue method. 

## Approach & Efficiency
I set up the Pseudo Queue class as having this.inStack and this.Outstack. 
- enqueue method: Remove all the nodes from the instack and push them to the outstack, then add the passed value to the in stack and add back all of the nodes from the outstack. 
- dequeue method: Remove all but one of the nodes from the instack, then remove and return the value of the last node, then add back all of the nodes from the outstack.
