// Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by d positions.

// Examples:  

// Input: 
// arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3 4 5 6 7 1 2

// Input: arr[] = {3, 4, 5, 6, 7, 1, 2}, d=2
// Output: 5 6 7 1 2 3 4


const array = [1, 2, 3, 4, 5, 6, 7];
const leftRotateByN = (arr,d) => {
let temp=arr.slice(0,d)
for(let i=d;i<arr.length;i++){
    arr[i-d]=arr[i]
}
let vl=0
for(let j=arr.length-d;j<arr.length;j++){
arr[j]=temp[vl]
vl++
}
return arr
};

console.log(leftRotateByN(array,2));
