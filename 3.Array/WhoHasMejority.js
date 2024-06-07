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