// Given an array arr[], the task is to find the elements of a contiguous subarray of numbers that has the largest sum.

const array=[1,2,3,-2,5]

const maxSubArraySum=(arr,n)=>{
    let max=0
    for(let i=1;i<n;i++){
       arr[i]=Math.max(arr[i],(arr[i]+arr[i-1])) 
       max=Math.max(max,arr[i])
    }
    return max
}

console.log(maxSubArraySum(array,5))