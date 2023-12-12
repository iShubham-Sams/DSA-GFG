const floorInShortedArray=()=>{
    let ans=-1
        let start=0
        let end=arr.length-1
        while(start<=end){
            let mid=Math.floor((start+end)/2)
            if(arr[mid]<=x){
                ans=mid
                start=mid+1
            }else if(arr[mid]>x){
                end=mid-1
            }
        }
        return ans
}