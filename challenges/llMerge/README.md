# Linked List Merge
This is a function to merge two linked lists. 

## Challenge
Write a function to merge two lists together, alternating values between each list. 

## Approach & Efficiency
I originally wrote a while loop for when the lists are the same length, and as long as they both have a next value, it would keep adding one from each list and then moving to the next item.

Once that's through, I checked to see which list was longer and then added the remaining values from that list to the new list, then returning the head of the new list. 