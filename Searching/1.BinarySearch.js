const binarySearch=(arr,find)=>{
    let low=0
    let heigh=arr.length
    while(heigh>=low){
        let mid=Math.floor(low+heigh/2)
        if(arr[mid]==find){
            return mid
        }else if(find>arr[mid]){
          low=mid
        }else if(find<arr[mid]){
            heigh=mid
        }
    }
    return -1
    }
    console.log(binarySearch([10,20,30,40,50,60],20))

    