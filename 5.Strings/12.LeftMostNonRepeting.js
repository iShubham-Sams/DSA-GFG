const S = "zxvczbtxyzvy"

const nonrepeatingCharacter=(s)=>{
    const arr=new Array(256).fill(-1)
    for(let i=0;i<s.length;i++){
                const ind= s.charCodeAt(i)
                if(arr[ind]==-1){
                    arr[ind]=i
                }else{
                   arr[ind]=-2
                }
    }
    let ans=Number.MAX_SAFE_INTEGER
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
        ans=Math.min(ans,arr[i])
        }
    }
    return ans==Number.MAX_SAFE_INTEGER?-1:ans
}

console.log(nonrepeatingCharacter(S));