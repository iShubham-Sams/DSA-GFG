// Given a sorted array arr[] of size n without duplicates, and given a value x.
// Floor of x is defined as the largest element k in arr[] such that k is smaller than or equal to x.
// Find the index of k(0-based indexing).

// Examples

// Input: n = 7, x = 0 arr[] = {1,2,8,10,11,12,19}
// Output: -1
// Explanation: No element less than 0 is found. So output is "-1".
// Input: n = 7, x = 5 arr[] = {1,2,8,10,11,12,19}
// Output: 1
// Explanation: Largest Number less than 5 is 2 (i.e k = 2), whose index is 1(0-based indexing).
const floorInShortedArray = (arr, x) => {
  let ans = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x && mid > 0) {
      return mid - 1;
    }
    if (arr[mid] <= x) {
      ans = mid;
      start = mid + 1;
    } else if (arr[mid] > x) {
      end = mid - 1;
    }
  }
  return ans;
};

console.log(floorInShortedArray([1, 2, 8, 10, 11, 12, 19], 5));
