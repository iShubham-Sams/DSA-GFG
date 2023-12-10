// const findPeakElement=(arr)=>{
//     if(arr.length==1){
//         return arr[0]
//     }
//     let lastEl=arr.length-1
//     let peak=[]
//     if(arr[0]>arr[1]){
//        return arr[0]
//     }
//     if(arr[lastEl]>arr[lastEl-1]){
//         return arr[lastEl]
//     }
// for(let i=1;i<=lastEl;i+=2){
// if(arr[i]>arr[i-1]&&arr[i]>arr[i+1]){
//     return arr[i]
// }
// }
// return peak
// }

// console.log(findPeakElement([10,20,15,5,23,90]))

const findPeakElement=(arr)=>{
    let low=0
    let heigh=arr.length

    while(low<=heigh){
        let mid=Math.floor((low+heigh)/2)

        if(((mid==0)||(arr[mid]>=arr[mid-1]))
        &&((mid==arr.length-1)||(arr[mid]>=arr[mid+1])))
        {
            return mid
        }
         if(mid>0&&arr[mid-1]>arr[mid]){
            heigh=mid-1
         }else{
            low=mid+1
         }
    }
    return -1
}

console.log(findPeakElement([10,20,15,5,23,90]))