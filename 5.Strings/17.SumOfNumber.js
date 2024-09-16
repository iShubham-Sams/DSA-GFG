const string='1abc23'

const getSum=(str)=>{
        let sum=0
        let temNum=0
    for(let i=0;i<str.length;i++){
        if(Number.isInteger(Number(str[i]))){
            if(temNum==0){
                temNum=temNum+Number(str[i])
            }else{
                temNum=String(temNum)+String(str[i])
        }
    }else{
        sum=sum+Number(temNum)
        temNum=0
    }
    }
    return sum=sum+Number(temNum)
}

console.log(getSum(string));