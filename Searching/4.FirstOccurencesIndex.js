    // iterative
    const indexOfFirst=(arr,find)=>{
        let low=0
        let heigh=arr.length-1
        
        while(low<=heigh){
        let mid=Math.floor((low+heigh)/2)
         if(arr[mid]>find){
            heigh=mid-1
        }else if(arr[mid]<find){
            low=mid+1
        }else{
            if(arr[mid]!==arr[mid-1]||mid==0){
                return mid
            }else{
                heigh=mid-1
            }
        }
        }
        return -1
        }
        // console.log(indexOfFirst([5,10,10,15,20,20,20],10))


const firstAcc=(arr,n,val)=>{
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
            if(arr[mid-1]==val){
                end=mid-1
            }else{
                return mid
            }
        }
    }
    }
    return -1
}
console.log(firstAcc([15,15,15],3,15));