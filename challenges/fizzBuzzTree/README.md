# FizzBuzz Tree
This challenges asks us to traverse a tree and determine if the values are divisible by 3, 5, or both, and if so to change the values in the tree. 

## Challenge
Write a function that takes in a tree and checks the value of each node to see if it's divisible by 3, 5, or both. If it is, the value of the node gets changed to either Fizz, Buzz, or FizzBuzz.  

## Approach & Efficiency
I used one of my previous tree traversal methods to go through the entire tree, and for each value I checked if it was divisible by 3, 5, or both. Unlike the other tree methods, this one took in the entire tree and not just a singular node, so the main function takes in the tree and the helper takes the root and the tree itself so it can be modified and returned at the end. 