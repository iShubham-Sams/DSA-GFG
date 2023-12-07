const binarySearch=(arr,find)=>{
    let low=0
    let max=arr.length-1
    while(low<=max){
    let center=Math.floor((low+max)/2)
    if(arr[center]===find){
        return center
    }else if(arr[center]>find){
        max=center-1
    }else{
        low=center+1
    }
    }
    return -1
    }
    console.log(binarySearch([10,20,30,40,50,60],20))