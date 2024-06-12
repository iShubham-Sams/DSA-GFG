// Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place).
// In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

// If there are multiple solutions, find the lexicographically smallest one.

// Note:The given array is sorted in ascending order, and you don't need to return anything to make changes in the original array itself.

// Example 1:

// Input:
// n = 5
// arr[] = {1,2,3,4,5}
// Output: 2 1 4 3 5
// Explanation: Array elements after 
// sorting it in wave form are 
// 2 1 4 3 5.

const array=[1,2,3,4,5]
const WaveArray=(arr,n)=>{
let loopN=Math.ceil(n/2)
for(let i=0;i<loopN;i++){
    let ind=i*2
    if(ind+1<n){
        let tem=arr[ind]
        arr[ind]=arr[ind+1]
        arr[ind+1]=tem
    }
}
return arr
}

console.log(WaveArray(array,5))