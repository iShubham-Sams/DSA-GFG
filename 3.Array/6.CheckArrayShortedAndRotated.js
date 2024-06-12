// Given an array arr[] of N distinct integers, check if this array is Sorted (non-increasing or non-decreasing)
//  and Rotated counter-clockwise. Note that input array may be sorted in either increasing or decreasing order, then rotated.
// A sorted array is not considered as sorted and rotated, i.e., there should be at least one rotation.
// Example 1:

// Input:
// N = 4
// arr[] = {3,4,1,2}
// Output: Yes
// Explanation: The array is sorted 
// (1, 2, 3, 4) and rotated twice 
// (3, 4, 1, 2).


const CheckArrayShortedAndRotated=(arr)=>{
    let count=0
        for(let i=0;i<arr.length;i++){
            if(arr[i-1]>arr[i]){
                count++
            }
        }
        return count==1
}