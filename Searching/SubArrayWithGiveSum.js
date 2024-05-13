const subArrayWithGiveSum=(arr,sum)=>{
    let start=0
    let end=0
    let total=0
    for(let i=0;i<arr.length;i++){
      total=total+arr[i]
      while(total>sum){
        total=total-arr[start]
        start++
      }
      if(total==sum){
        if(sum==0&&arr[start]!==0){
          return [-1]
        }
        end=i
        return [start+1,end+1]
      }
    }
    return [-1]
    }
  
  console.log(subArrayWithGiveSum([1,2,3,4],0))