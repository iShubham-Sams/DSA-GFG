const missingNum=(arr)=>{
    for(let i=0;i<arr.length;i++){
       let correct=arr[i]-1
       while(arr[i]>0&&arr[i]<arr.length&&arr[i]!==arr[correct]){
          let temp = arr[i];
    arr[i] = arr[correct];
    arr[correct] = temp;
          correct=arr[i]-1
       }
    }
    
    for(let i=0;i<arr.length;i++){
       if(arr[i]!==i+1){
          return i+1
       }
    }
    return arr.length+1
    }
    console.log(missingNum([3, 4, -1, 1]))