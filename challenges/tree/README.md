# Trees
This challenges asks us to write two classes for Binary Trees and Binary Search Trees and several methods for each.   

## Challenge
For Binary Trees, write functions to traverse the tree in preorder, inorder, and postorder.

For Binary Search Trees, write functions to add a value to the tree in the right spot and find if a tree contains a certain value. 

For Maximum Value, write a function to traverse the tree and return the maximum value, assuming all values are numeric. 

For Breadth First traversal, write a function that traverses a tree one level at a time and prints each value in order. 

## Approach & Efficiency
I mostly used recursive helper functions to use for these methods since we need to loop through multiple levels of each tree and we don't know how deep they are. 

For finding the maximum function, I used the simplest traversal method and then just found the highest number in the array. 

For breadth first traversal, I pushed the children of each node into an array and then shifted them off in order and called the recursive function on them. 