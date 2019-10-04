# Multi Bracket Validation
This is a function to confirm whether or not all opening brackets and parentheses in a string have the appropriate closing bracket and are positioned correctly.  

## Challenge
Write a function to verify brackets in a string. 

## Approach & Efficiency
I started out by writing a long function where I split the punctuation into an array and then pushed them into separate arrays based on whether they were open or close. I would then compare the arrays to see if the pair matched. This approach didn't work for nested brackets. 

I then decided to use a stack and pushed opening brackets onto a stack whenever I came across one, and then popping one off when I found a closing one. If the popped value was a complete set with the closing one through the whole loop, then I would return true.