const printPattern=(n)=>{
let val=n
let arr=[]
while(val>0){
arr.push(val)
val=val-5
}
while(val<=n){
    arr.push(val)
    val=val+5
}
return arr
}

console.log(printPattern(4));