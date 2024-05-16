const array=[8,-8,9,-9,10,-11,12]

const minAdjacent=(arr,N)=>{
let min=Number.MAX_SAFE_INTEGER
for(let i=1;i<N;i++){
    let tem=Math.abs(arr[i]-(arr[i-1]))
    min=Math.min(min,tem)
}
return Math.min(min,Math.abs(arr[N-1]-arr[0]))
}

console.log(minAdjacent(array,7));