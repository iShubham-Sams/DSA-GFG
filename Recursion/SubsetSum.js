const SubsetSum=(arr,integer,sum)=>{
if(integer===0){
 return sum===0?1:0
}
return SubsetSum(arr,integer-1,sum)+SubsetSum(arr,integer-1,sum-arr[integer-1])
}
console.log(SubsetSum([10,20,15],3,15));