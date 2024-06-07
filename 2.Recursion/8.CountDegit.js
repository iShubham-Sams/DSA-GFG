const count=(n,c)=>{
if(n<=0){
return c
}
return count(Math.floor(n/10),c+1)
}


console.log(count(99999,0));