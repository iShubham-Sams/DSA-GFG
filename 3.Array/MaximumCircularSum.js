const array=[ -12, -14]

const normalMax=(aMi,N)=>{
    let maxSum=aMi[0]
    for(let i=1;i<N;i++){
        aMi[i]=Math.max(aMi[i],(aMi[i]+aMi[i-1]))
        maxSum=Math.max(maxSum,aMi[i])
    }
    return maxSum
}
const normalMin=(aMa,N)=>{
    let minSum=aMa[0]
    for(let i=1;i<N;i++){
        aMa[i]=Math.min(aMa[i],(aMa[i]+aMa[i-1]))
        minSum=Math.min(minSum,aMa[i])
    }
    return minSum
}


const maximumCircular=(arr,N)=>{
const maxArr=[...arr]
let maxSum=normalMax(maxArr,N)
if(maxSum<0){
    return maxSum
}
let arrSum=0
for(let i=0;i<N;i++){
    arrSum+=arr[i]
}
const minArr=[...arr]
let min=normalMin(minArr,N)
if(min>0){
    return arrSum
}
let maxCircular=arrSum-min
return Math.max(maxSum,maxCircular)
}

console.log(maximumCircular(array,2))