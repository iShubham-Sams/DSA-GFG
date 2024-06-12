// Given an array Arr of n integers arranged in a circular fashion. Your task is to find the minimum absolute difference between 
// adjacent elements.

// Example 1:

// Input:
// n = 7
// Arr[] = {8,-8,9,-9,10,-11,12}
// Output: 4
// Explanation: The absolute difference 
// between adjacent elements in the given 
// array are as such: 16 17 18  19 21 23 4
// (first and last). Among the calculated 
// absolute difference the minimum is 4.

const array=[8,-8,9,-9,10,-11,12]

const minAdjacent=(arr,N)=>{
let min=Number.MAX_SAFE_INTEGER
for(let i=1;i<N;i++){
    let tem=Math.abs(arr[i]-(arr[i-1]))
    min=Math.min(min,tem)
}
return Math.min(min,Math.abs(arr[N-1]-arr[0]))
}

console.log(minAdjacent(array,7));