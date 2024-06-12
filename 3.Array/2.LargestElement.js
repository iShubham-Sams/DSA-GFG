// Given an array arr of size N, the task is to find the largest element in the given array. 
// Input: arr[] = {10, 20, 4}
// Output: 20

const arr = [10, 5, 20, 8, 15, 3, 25];

const gfgLargestElement = (arr) => {
  let large = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[large]) {
      large = i;
    }
  }
  return large;
};
console.log(gfgLargestElement(arr));
