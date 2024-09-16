// Given an unsorted array arr of size n that contains only non negative integers, find a sub-array (continuous elements) that has sum equal to s. You mainly need to return the left and right indexes(1-based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right. If no such subarray exists return an array consisting of element -1.

const arr = [1, 2, 3, 4];
const n = 4;
const s = 0;

const getSubArraySumIndex = (arr, n, s) => {
  let low = 0;
  let hei = 1;
  let sum = arr[low] + arr[hei];
  if (arr[low] == s) {
    let l = ++low;
    return [l, l];
  }
  if (arr[hei] == s) {
    let h = ++hei;
    return [h, h];
  }
  while (hei < n) {
    if (sum == s) {
      return [++low, ++hei];
    }
    if (sum < s) {
      hei = hei + 1;
      sum = sum + arr[hei];
    }
    if (sum > s) {
      if (low < hei) {
        sum = sum - arr[low];
        low = low + 1;
      } else {
        sum = sum + arr[hei + 1];
        hei = hei + 1;
      }
    }
  }
  return [-1];
};
console.log(getSubArraySumIndex(arr, n, s));
