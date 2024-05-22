const str1='AXY'
const str2='ADXCPY'

const checkSub=(A,B)=>{
    let temp=A
for(let i=0;i<B.length;i++){
    if(B[i]==temp[0]){
        temp= temp.slice(1)
    }
}
return temp.length==0?true:false
}

console.log(checkSub(str1,str2));