// Given an array of distinct elements which was initially sorted. This array may be rotated at some unknown point. The task is to find the minimum element in the given sorted and rotated array.

// Example 1:

// Input:
// N = 10
// arr[] = {2,3,4,5,6,7,8,9,10,1}
// Output: 1
// Explanation: The array is rotated
// once anti-clockwise. So minimum
// element is at last index (n-1)
// which is 1.
const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
const smallestNumberInShortedArray = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  let ans = Number.MAX_VALUE;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[high]) {
      ans = Math.min(ans, arr[low]);
      break;
    }
    if (arr[mid] >= arr[low]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      high = mid - 1;
      ans = Math.min(ans, arr[mid]);
    }
  }
  return ans;
};

console.log(smallestNumberInShortedArray(array));
