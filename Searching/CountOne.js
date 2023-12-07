const countOne=(arr)=>{
    let low=0
    let max=arr.length-1
    while(low<=max){
        let mid=Math.floor((low+max)/2)
        if(arr[mid]==0){
            low=mid+1
        }else if(arr[mid]==1&&arr[mid-1]==1){
            max=mid-1
        }else{
            if(mid==0||arr[mid-1]==0){
              return arr.length-mid
            }
        }
    }
    return 0
}

console.log(countOne([0,0,1,1,1,1,1]))