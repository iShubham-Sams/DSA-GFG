// Be the comment of the day in POTD and win a GfG T-Shirt!
// Solve right now

// banner
// Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

// Note: If at any instance, there are no more subarrays of size greater than or equal to K, then reverse the last subarray (irrespective of its size). You shouldn't return any array, modify the given array in-place.

// Example 1:

// Input:
// N = 5, K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: First group consists of elements
// 1, 2, 3. Second group consists of 4,5.

function reverseInGroups(arr, n, k) {
    // code here
    const groupS = Math.floor(n / k)
    for (let i = 0; i <= groupS; i++) {
        let low = i * k
        let hei = (i * k) + (k - 1)
        if (!(hei < n)) {
            hei = n - 1
        }
        while (hei >= low) {
            let temp = arr[low]
            arr[low] = arr[hei]
            arr[hei] = temp
            hei--
            low++
        }
    }
}