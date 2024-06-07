const CheckArrayShortedAndRotated=(arr)=>{
    let count=0
        for(let i=0;i<arr.length;i++){
            if(arr[i-1]>arr[i]){
                count++
            }
        }
        return count==1
}