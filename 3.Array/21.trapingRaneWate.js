// self

const trapingWater=(arr,n)=>{
    let le=arr[0]
    let leftHei=[le]
    for(let i=1;i<n;i++){
        if(arr[i]>le){
           leftHei[i]=arr[i]
           le=arr[i]
        }else{
          leftHei[i]=le   
        }
    }
    let Re=arr[n-1]
    let reighHei=[Re]
    for(let i=n;i>=0;i--){
        if(arr[i]>Re){
           reighHei[i]=arr[i]
           Re=arr[i]
        }else{
          reighHei[i]=Re   
        }
    }
    let totaltTrap=0
    for(let i=1;i<n-1;i++){
        if(leftHei[i]>arr[i]&&reighHei[i]>arr[i]){
            let min=Math.min(leftHei[i],reighHei[i])
            let s=min-arr[i]
            if(s>0){
            totaltTrap=totaltTrap+s
            }
        }
    }
    return totaltTrap
}
console.log(trapingWater(array,6))