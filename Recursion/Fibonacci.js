
const fibonacci=(n,k=0,l=1)=>{
if(n<=1){
    return n
}
return fibonacci(n-1) +fibonacci(n-2)
}

console.log(fibonacci(4))