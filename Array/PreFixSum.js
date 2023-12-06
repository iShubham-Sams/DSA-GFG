// const arr=new Array(100)
// let leftArr=[1,2,5,15]
// let rightArr=[5,8,7,18]
// arr[0]=0
// const addFree=(start,end)=>{
// for(let i=start;i<=end;i++){
//     if(arr[i]>0){
//       arr[i]++
//     }else{
//         arr[i]=1
//     }
// }
// }
// for(let i=0;i<leftArr.length;i++){
//     addFree(leftArr[i],rightArr[i])
// }


// const maximumAppearingElement=()=>{
// let max=0
// for(let i=0;i<arr.length;i++){
//    if(arr[i]>arr[max]){
//     max=i
//    } 
// }
// return max
// }
// console.log(maximumAppearingElement())


// GFG ans
const maximuAppearing=(startArray,endArray)=>{
    let arr=new Array(101).fill(0)
if(startArray.length!==endArray.length){
    return false
}
for(let i=0;i<startArray.length;i++){
let startInd=startArray[i]
let endInd=endArray[i]+1
arr[startInd]=1
arr[endInd]=-1
}
let max=0
let sum=0
for(let j=0;j<arr.length;j++){
if(arr[j]==1){
    sum++
}else if(arr[j]==-1){
    sum--
}
arr[j]=sum
if(arr[j]>arr[max]){
max=j
}
}
return max
}
console.log(maximuAppearing([1,2,4],[4,5,7]))

