// Given an array arr[] of size N where every element is in the range from 0 to n-1. Rearrange the given array so that the
//  transformed array arrT[i] becomes arr[arr[i]].

// NOTE: arr and arrT are both same variables, representing the array before and after transformation respectively.

// Example 1:

// Input:
// N = 2
// arr[] = {1,0}
// Output: 0 1
// Explanation: 
// arr[arr[0]] = arr[1] = 0
// arr[arr[1]] = arr[0] = 1
// So, arrT becomes {0, 1}

const array=[1 ,0,3,4,2]

const rearrange=(arr,n)=>{
    let rearangeOrder=[]
    for(let i=0;i<n;i++){
        let temp=arr[i]
            rearangeOrder[i]=arr[temp]
    }
for(let i=0;i<n;i++){
    arr[i]=rearangeOrder[i]
}
return arr
}

console.log(rearrange(array,2));