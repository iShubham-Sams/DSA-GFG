const string='geeksforgeeks'

// const leftMost=(s)=>{
//     const arr=new Array(256).fill(0)
//     for(let i=0;i<s.length;i++){
//            const ind= s.charCodeAt(i)
//            arr[ind]++
//     }
//     for(let i=0;i<s.length;i++){
//         const ind= s.charCodeAt(i)
//         if(arr[ind]>0){
//             return i
//         }
//     }
//     return -1
// }

// console.log(leftMost(string));

// good approach

// const leftMost=(s)=>{
//     const arr=new Array(256).fill(-1)
//     let ans=Number.MAX_SAFE_INTEGER
//     for(let i=0;i<s.length;i++){
//         const ind= s.charCodeAt(i)
//         if(arr[ind]==-1){
//             arr[ind]=i
//         }else{
//            ans=Math.min(ans,arr[ind])
//         }
//     }
//     return ans==Number.MAX_SAFE_INTEGER?-1:ans
// }
// console.log(leftMost(string))

const leftMost=(s)=>{
    const arr=new Array(256).fill(-1)
    let ans=-1
    for(let i=s.length;i>0;i--){
        const ind= s.charCodeAt(i)
        if(arr[ind]==-1){
            arr[ind]=i
        }else{
           ans=i
        }
    }
    return ans
}
console.log(leftMost(string))