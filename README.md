# Codility _weird_ fibonnaci
The problem: 
>Consider the 0, 1, 1, 2,3, 5, 8, 13, 12, 7, 10, 8, 9, … sequence of numbers, the 0th element is 0 and the 1st is 1. The successive elements are defined recursively. Each of them is the sum of the separate digits of the two previous elements. Write a function that given integer N, return the Nth number in the sequence. Given N = 2, the function should return 1 Given N = 6, the function should return 8 Given N = 10, the function should return 10

## The worst part was to interpret it correctly 
It seems to be a usual `fibonacci` until after the `13` it follows with `12`  
If you miss the `is the sum of the *separate digits* of the two previous elements` you will get yourself in trouble
