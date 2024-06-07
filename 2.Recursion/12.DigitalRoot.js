const digitalRoot=(num)=>{
    if(num==0){
        return 0
    }

    let ans= num%10+(digitalRoot(Math.floor(num/10)))
    if(ans<=9){
        return ans
    }
     return digitalRoot(ans)
}

console.log(digitalRoot(99999));