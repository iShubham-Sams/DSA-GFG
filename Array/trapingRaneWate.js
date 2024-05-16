const wall = [3, 0, 1, 2, 5];

const getTotalStoreWater = (arr) => {
  let reuslt = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let lMax = arr[i];
    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, arr[j]);
    }
    let rMax = arr[i];
    for (let k = i + 1; k <= arr.length - 1; k++) {
      rMax = Math.max(rMax, arr[k]);
    }
    let minValue = Math.min(lMax, rMax);
    reuslt = reuslt + minValue - arr[i];
  }
  return reuslt;
};

console.log(getTotalStoreWater(wall));


const array=[3,0,0,2,0,4]


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