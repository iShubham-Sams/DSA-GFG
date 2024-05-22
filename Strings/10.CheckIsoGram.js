const string='machine'

const checkIso=(s)=>{
const arr=new Array(256).fill(0)
for(let i=0;i<s.length;i++){
    if(arr[s.charCodeAt(i)]>0){
        return 0
    }else{
       const ind= s.charCodeAt(i)
       arr[ind]++
    }
}
return 1
}

console.log(checkIso(string));