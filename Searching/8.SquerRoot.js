const squareRoot=(num)=>{
    let low=0
    let heig=num
    let ans=-1
    while(low<=heig){
    let mid=Math.floor(low+heig)/2
    let squ=mid*mid
    if(squ==num){
        return mid
    }else if(squ>num){
        heig=mid-1
    }else{
        low=mid+1
        ans=mid
    }
    }
    return ans
    }
    console.log(squareRoot(14))