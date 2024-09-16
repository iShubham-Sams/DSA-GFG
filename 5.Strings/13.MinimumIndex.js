const s = "geeksforgeeks"
const p = "set"

const minIndexChar=(str, patt)=>{
    const arr=new Array(256).fill(-1)
    for(let i=0;i<str.length;i++){
        const ind= str.charCodeAt(i)
        if(arr[ind]==-1){
            arr[ind]=i
        }
}
let ans=Number.MAX_SAFE_INTEGER
for(let i=0;i<patt.length;i++){
    const ind= patt.charCodeAt(i)
    if(arr[ind]>-1){
        ans=Math.min(ans,arr[ind])
    }
}
return ans==Number.MAX_SAFE_INTEGER?-1:ans
}

console.log(minIndexChar(s,p));