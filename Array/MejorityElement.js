// give a array find any of one index of array element which is in mejority
const array=[8,8,6,6,6,4,6]

const MejorityElement=(arr)=>{
    let count =1
    let mejority=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]==arr[mejority]){
            count++
        }else{
            count--
        }
        if(count==0){
            count=1
            mejority=i
        }
    }
    let mCount=0
    for(let i=0;i<arr.length;i++){
      if(arr[i]==arr[mejority]){
        mCount++
      }
    }
    if(mCount<=Math.floor(arr.length/2)){
        return -1
    }
    return mCount
}