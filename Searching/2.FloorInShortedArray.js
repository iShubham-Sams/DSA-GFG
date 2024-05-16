const floorInShortedArray=(arr,x)=>{
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

console.log(floorInShortedArray([1,2,8,10,11,12,19],0));