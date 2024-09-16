// Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[].
//  Expected time complexity is O(Logn)

// Examples:

//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
//   Output: 4 // x (or 2) occurs 4 times in arr[]

//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 3
//   Output: 1

//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 1
//   Output: 2

//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 4
//   Output: -1 // 4 doesn't occur in arr[]
// Method: Binary Search

const arr = [10, 20, 20, 20, 30, 30];

const firstAcc = (arr, n, val) => {
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > val) {
      end = mid - 1;
    } else if (arr[mid] < val) {
      start = mid + 1;
    } else {
      if (arr[mid] == val) {
        if (arr[mid - 1] == val) {
          end = mid - 1;
        } else {
          return mid;
        }
      }
    }
  }
  return -1;
};

const lastOccurrencesIndex = (arr, n, val) => {
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > val) {
      end = mid - 1;
    } else if (arr[mid] < val) {
      start = mid + 1;
    } else {
      if (arr[mid] == val) {
        if (arr[mid + 1] == val) {
          start = mid + 1;
        } else {
          return mid;
        }
      }
    }
  }
  return -1;
};

const countOccurrence = (arr, n, val) => {
  const firstOcc = firstAcc(arr, n, val);
  if (firstOcc == -1) {
    return 0;
  } else {
    const lastOcc = lastOccurrencesIndex(arr, n, val);
    return lastOcc - firstOcc + 1;
  }
};
console.log(countOccurrence([10, 20, 20, 20, 40, 40], 6, 40));
