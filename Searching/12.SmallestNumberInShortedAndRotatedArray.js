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
const array=[2,3,4,5,6,7,8,9,10,1]
const smallestNumberInShortedArray=(arr,n)=>{
    let low=0
    let high=n
    if (arr[low] <= arr[high]) {
    return arr[low]
}
while (low <= high) {
    let mid = Math.floor((low + high) / 2);
 
    // Check if mid is the minimum element
    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }
    // If the left half is sorted, the minimum element must be in the right half
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    }else {
    // If the right half is sorted, the minimum element must be in the left half
      high = mid - 1;
    }
  }
  
}

console.log(smallestNumberInShortedArray(array,1))