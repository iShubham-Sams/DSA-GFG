// Given an array arr[] of size N and two elements x and y, use counter variables to find which element appears most in the array.
//  If both elements have the same frequency, then return the smaller element.
// Note:  We need to return the element, not its count.

 

// Example 1:

// Input:
// N = 11
// arr[] = {1,1,2,2,3,3,4,4,4,4,5}
// x = 4, y = 5
// Output: 4
// Explanation: 
// frequency of 4 is 4.
// frequency of 5 is 1.
let N = 11
let arr = [1,1,2,2,3,3,4,4,4,4,5]
let x = 4
let y = 5
const majorityWins=(arr, n, x, y)=>{
let xM=0
let yM=0
for(let i=0;i<N;i++){
    if(arr[i]==x){
        ++xM
    }else if(arr[i]==y){
        ++yM
    }
}
if(xM>yM){
    return x
}else if(yM>xM){
    return y
}else {
    return Math.min(x,y)
}
}
console.log(majorityWins(arr, N, x, y));