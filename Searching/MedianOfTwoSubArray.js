const medianOfTwoShortArray=(arr1,arr2)=>{
    if(arr2.length<arr1.length){
      let tem=arr1
      arr1=arr2
      arr2=tem
    }
    let bigin=0 
    let end=arr1.length
    while(bigin<=end){
      let i1=Math.floor((bigin+end)/2)
      let i2=Math.floor((arr1.length+arr2.length+1)/2)-i1
      let min1=(i1==arr1.length)?Infinity:i1
      let max1=(i1==0)?Infinity:i1-1
      let min2=(i2==arr2.length)?Infinity:i2
      let max2=(i2==0)?Infinity:i2-1
    if(max1<=min2&&max2<=min1){
   if((arr1.length+arr2.length)%2==0){
    let mx= Math.max(max1,max2)
    let mn= Math.min(min1,min2)
    console.log(mx,'mx')
    console.log(mn,'mn')
   return mx+mn/2
   }else{
  return Math.max(max1,max2)
   }
    }else if(max1>min2){
    end=i1-1
    }else{
      bigin=i1+1
    }
    }
    return -1
    
  }
  console.log(medianOfTwoShortArray([1,2,3,4,5],[1,2,3]))