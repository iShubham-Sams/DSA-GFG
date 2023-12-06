let arr=[3,4,8,-9,9,7]
let arrlast=arr.length-1
let rightSum=0

for(let i=0;i<=arrlast;i++){
    rightSum+=arr[i]
}

const equilibriumPoint=(array)=>{
    let leftS=0
for(let i=0;i<array.length;i++){
 rightSum-=arr[i]
 if(leftS==rightSum){
    return true
 }
 leftS+=arr[i]
}
return false
}

console.log(equilibriumPoint(arr))