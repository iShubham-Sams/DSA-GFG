// Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears 
// after the smaller number. 

// Examples : 

// Input : arr = {2, 3, 10, 6, 4, 8, 1}
// Output : 8
// Explanation : The maximum difference is between 10 and 2.

// Input : arr = {7, 9, 5, 6, 3, 2}
// Output : 2
// Explanation : The maximum difference is between 9 and 7.

const array = [2, 3, 10, 6, 4, 8, 1];
const maxDiff=(arr,n)=>{
    let dif=0
    let min=arr[0]
    for(let i=1;i<n;i++){
       if(arr[i]>min){
           maxDiff=Math.max(dif,arr[i]-min)
       } else if(arr[i]<min){
           min=arr[i]
       }
    }
    console.log(dif)
}
maxDiff(array,6)


