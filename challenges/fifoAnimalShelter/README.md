# Animal Shelter
This is a challenge to create a pseudo queue model with two queues that serve as a dog queue and a cat queue. 

## Challenge
Write a class for an animal shelter queue which is made up of two queues and takes a enqueue and dequeue method. 

## Approach & Efficiency
I set up the Animal Shelter Queue class as having this.cats and this.dogs queues. 
- enqueue method: Takes an animal object with a name and type. If the type is dog, use the previous enqueue method to add to the end of the dog queue. Same for cats. 
- dequeue method: Based on the inputted preference, use the previous dequeue method to remove from the top of the queue. If there are no more animals in a certain queue, return an error message. 
