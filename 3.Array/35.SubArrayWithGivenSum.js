const array=[1,4,20,3,10,5]
const subArrayWithGivenSum=(arr,sum)=>{
let start=0
let end=0
let temSum=0
while(end<=arr.length){
if(temSum==sum){
    return 'yes'
}
if(temSum>sum){
    temSum=temSum-arr[start]
    ++start
}
if(temSum<sum){
    temSum=temSum+arr[end]
    end++
}
}
return "no"
}

console.log(subArrayWithGivenSum(array,33));
