// Given a binary array arr[] of size N, which is sorted in non-decreasing order, count the number of 1’s in it.

// Examples:

// Input:
let ar = [0, 0, 0, 0, 0, 1, 1];
let le = 7;
// Output: 2

// Input:
// let ar = [1, 1, 1, 1, 1, 1, 1];
// let le = 7;
// Output: 7

// Input:
// let ar = [0, 0, 0, 0, 0, 0, 0];
// let le = 7;
// Output: 0
const countOne = (arr, length) => {
  if (arr[0] == 1) {
    return length;
  }
  if (arr[length - 1] == 0) {
    return 0;
  }
  let low = 0;
  let hig = length;
  while (low <= hig) {
    let mid = Math.floor((low + hig) / 2);
    if (arr[mid] == 0) {
      low = mid + 1;
    } else {
      if (arr[mid] == 1 && arr[mid - 1] == 0) {
        return length - mid;
      } else {
        hig = mid - 1;
      }
    }
  }
};

console.log(countOne(ar, le));
