// const indexOfFirst=(arr,find)=>{
//     let low=0
//     let heigh=arr.length-1
//     let count=0
//     while(low<=heigh){
//         let mid=Math.floor((low+heigh)/2)
//     if(arr[mid]>find){
//         heigh=mid-1
//     }else if(arr[mid]<find){
//         low=mid+1
//     }else{
    
//         if(arr[mid]!==arr[mid-1]||mid==0){
//             for(let i=mid;i<arr.length;i++){
//                 if(arr[i]==find){
//                     count++
//                 }
//             }
//             return count
//         }else{
//             heigh=mid-1
//         }
//     }
//     }
//     return count
//     }
//     console.log(indexOfFirst([5,10,10,15,20,20,20],20))

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

const indexOfLast=(arr,find)=>{
    let low=0
    let heigh=arr.length-1
    
    while(low<=heigh){
    let mid=Math.floor((low+heigh)/2)
     if(arr[mid]>find){
        heigh=mid-1
    }else if(arr[mid]<find){
        low=mid+1
    }else{
        if(arr[mid]!==arr[mid+1]||mid!==heigh){
            return mid
        }else{
            low=mid+1
        }
    }
    }
    return -1
    }

const countOccurrences=(arr,n,x)=>{
    let first=indexOfFirst(arr,n,x)
    if(first===-1){
        return 0
    }else{
        return (indexOfLast(arr,n,x)-first)+1
    }

}