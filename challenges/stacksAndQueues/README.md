# Stacks and Queues
This is a challenge to create a stack model and a queue model. 

## Challenge
Write a class for stacks and queues and methods to add, remove, and read from each one. 

## Approach & Efficiency
I set up the Stack and Queue classes as Linked Lists are set up with, using a top and front property respectivaly. 
- push and enqueue method: Create a new node, if a top doesn't exist, set the new node to the top. If it does exist, move the top and then set the new node as the top 
- pop and dequeue method: If the top/front node exists, save its value to a variable and then make the next node the new top/front. Then return the result.
- peek method: Return the value of the top/front node.