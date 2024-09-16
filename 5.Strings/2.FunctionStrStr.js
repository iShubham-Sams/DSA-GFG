const string='ababaaaaaa'
const find='abaa'


const findStringSubArray=(s,x)=>{
    let ans=-1
    for(let i=0;i<s.length;i++){
        let flag=0
    for(let j=0;j<x.length;j++){
        if(s[i+j]!==x[j]){
            flag=1
            break
        }
    }
    if(flag==0){
         ans=i
         break
    }
    }
    return ans
}
console.log(findStringSubArray(string,find));