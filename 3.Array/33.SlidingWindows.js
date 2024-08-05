// Our Task: Given an array of integers of size 'n'. Our aim is to calculate the maximum sum of 'k' 
// consecutive elements in the array.
const slidingWindow=(arr,k)=>{
    let slideSum=0
    for(let j=0;j<k;j++){
     slideSum=slideSum+arr[j]
    }
    let result=slideSum
   for(let i=k;i<arr.length;i++){
     let add= arr[i]
     let sub=arr[i-k]
     slideSum=slideSum+add-sub
     result=Math.max(slideSum,result)
  }
  console.log(result)
}
(slidingWindow([1,8,30,-5,20,7],4))