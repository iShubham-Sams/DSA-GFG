// find if there is a pair with sum x in a sorted array
// let arr=[2,5,8,12,30]  sum=17  ans=[5,12] return true


const array=[2,4,8,9,11,12,20,30]
const twoPointerApproach=(arr,n)=>{
let low=0
let heigh=arr.length-1
while(low<=heigh){
    let sum=arr[low]+arr[heigh]
    if(sum==n){
        return true
    }
    if(sum>n){
        --heigh
    }else{
        ++low
    }
}
return false
}
console.log(twoPointerApproach(array,23));