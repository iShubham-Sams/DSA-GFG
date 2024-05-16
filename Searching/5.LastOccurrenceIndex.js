const lastOccurrencesIndex=(arr,n,val)=>{
    let start=0
    let end=n-1
    while(start<=end){
    let mid=Math.floor((start+end)/2)
    if(arr[mid]>val){
        end=mid-1
    }else if(arr[mid]<val){
        start=mid+1
    }else{
        if(arr[mid]==val){
            if(arr[mid+1]==val){
                start=mid+1
            }else{
                return mid
            }
        }
    }
    }
    return -1
}
console.log(lastOccurrencesIndex([5,8,8,10,10],5,10));