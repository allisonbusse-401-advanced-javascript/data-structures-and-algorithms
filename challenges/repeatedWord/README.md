# Repeated Word
This challenges asks us to find the first repeated word in a long string. 

## Challenge
Write a function that takes in a string and returns the first repeated word in the string, ignoring capitalization and punctuation.  

## Approach & Efficiency
I split the string into an array and lowercased everything and removed punctuation. Then I set up an empty object that would add the words as keys and a count as the value. The first key to go above one would be returned. 