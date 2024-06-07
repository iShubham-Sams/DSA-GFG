const isLuck=(num,d)=>{
    if(num%d==0){
        return false
    }
    if(num<d){
        return true
    }
    let removeIt=Math.floor(num/d)
  return  isLuck(num-removeIt,d+1)
}

console.log(isLuck(19,2));

