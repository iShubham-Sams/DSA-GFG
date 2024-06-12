// Given an array arr[] of n positive integers. The task is to find the maximum for every adjacent pairs in the array.
// Example 1:

// Input:
// n = 6
// arr[] = {1,2,2,3,4,5}
// Output: 2 2 3 4 5
// Explanation: Maximum of arr[0] and arr[1]
// is 2, that of arr[1] and arr[2] is 2, ...
// and so on. For last two elements, maximum 
// is 5.
const array=[78 ,77, 45]

const strongNeighbour=(sizeOfArray, arr)=>{
    for(let i=0;i<sizeOfArray-1;i++){
        console.log(Math.max(arr[i], arr[i + 1]) + " ");
    }
}
strongNeighbour(3,array);