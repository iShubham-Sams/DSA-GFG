// Given an 0-indexed array of integers arr[] of size n, find its peak element and return it's index. An element is 
// considered to be peak if it's value is greater than or equal to the values of its adjacent elements (if they exist).

// Note: The output will be 1 if the index returned by your function is correct; otherwise, it will be 0.

// Examples :
// Input: n = 7, arr[] = {1, 1, 1, 2, 1, 1, 1}
// Output: 1
// Explanation: In this case there are 5 peak elements with indices as {0,1,3,5,6}. Returning any of them will give you correct answer.


const array=[5,20,40,30,20,50,60]

const peakElement=(arr,n)=>{
let low=0 
let heigh=n
while(low<=heigh){
    let mid=Math.floor((low+heigh)/2)
    if((mid==0||(arr[mid]>=arr[mid-1]))
        &&(mid==n-1||(arr[mid]>=arr[mid+1]))){
        return arr[mid]
    }
    if(mid>0&&arr[mid]<arr[mid-1]){
        heigh=mid-1
    }else{
        low=mid+1
    }
}
}

console.log(peakElement(array,7));