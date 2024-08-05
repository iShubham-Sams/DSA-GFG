// Given a binary sorted non-increasing array of 1s and 0s. You need to print the count of 1s in the binary array.

// Example 1:

// Input:
// N = 8
// arr[] = {1,1,1,1,1,0,0,0}
// Output: 5
// Explanation: Number of 1's in given 
// binary array : 1 1 1 1 1 0 0 0 is 5.
const countOne=(arr)=>{
    if(arr[0]==0){
        return 0
      }
      if(arr[arr.length-1]==1){
        return arr.length
      }
      let low=0
      let max=arr.length-1
      while(low<=max){
              let mid=Math.floor((low+max)/2)
               if(arr[mid]==0){
                max=mid-1
               }else{
                if(arr[mid+1]==0){
                  return mid+1
                }else{
                  low=mid+1
                }
               }
              }
              return -1
          }


console.log(countOne([1,1,1,1,1,0,0,0]))