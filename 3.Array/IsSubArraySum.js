const isSubArraySum=(arr,k)=>{
    let start=0 
    let sum=0
    for(let e=0;e<arr.length;e++){
        sum+=arr[e]
        while(k<sum){
            sum-=arr[start]
            start++
        }
        if(sum==k){
            return true
        }
    }
    return false
}
console.log(isSubArraySum([4,8,12,5],17))