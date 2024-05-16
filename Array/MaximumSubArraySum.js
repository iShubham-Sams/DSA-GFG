const array=[-5,1,-2,3,-1,2,-2]

const maxSubArraySum=(arr,n)=>{
    let max=0
    for(let i=1;i<n;i++){
       arr[i]=Math.max(arr[i],(arr[i]+arr[i-1])) 
       max=Math.max(max,arr[i])
    }
    return max
}

console.log(maxSubArraySum(array,7))