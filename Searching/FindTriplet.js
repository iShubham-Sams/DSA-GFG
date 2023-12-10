const isPair=(array,start,end,howMuch)=>{
    while(start<end){
        if(array[start]+array[end]==howMuch){
            return true
        }
    else if(array[start]+array[end]>howMuch){
        end--
    }else{
        start++
    }
    }
    return false
    }
    
    
    
    const tripletSolution=(arr,result)=>{
    for(let i=0;i<arr.length-2;i++){
    return isPair(arr,i+1,arr.length-1,result-arr[i])
    }
    return false
    }
    console.log(tripletSolution([2,4,8,9,11,12,20,30],34))