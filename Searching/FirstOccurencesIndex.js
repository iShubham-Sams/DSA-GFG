// const indexOfFirst=(arr,low,heigh,find)=>{
//     if(low>heigh){ return -1}
//     let mid=Math.floor((low+heigh)/2)
//     if(arr[mid]==find){
//        if(mid==0||arr[mid]!==arr[mid-1]){
//         return mid
//        }else{
//        return indexOfFirst(arr,low,mid-1,find)
//        }
//     }else if(arr[mid]>find){
//      return  indexOfFirst(arr,low,mid-1,find)
//     }else{
//       return  indexOfFirst(arr,mid+1,heigh,find)
//     }
//     }
//     console.log(indexOfFirst([5,10,10,15,20,20,20],0,5,10))


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
        console.log(indexOfFirst([5,10,10,15,20,20,20],10))