// const minimumConsicutiveFlip=(arr)=>{
//     let firstGroup=arr[0]
//     let second=-1
//     if(firstGroup==0){
//      second=1
//     }else{
//       second=0
//     }
//     for(let i=0;i<arr.length;i++){
//       if((arr[i]==second&&arr[i-1]!==second)){
//         console.log(`move ${i}`)
//       }else if((arr[i-1]==second&&arr[i]!==second)){
//           console.log(`move to ${i-1}`)
//       }
//     }
//   }
//   (minimumConsicutiveFlip([0,1,1,0,0,1,1,0]))

//   Gfg
const minimumConsicutiveFlip=(arr)=>{
    
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
          if(arr[i]!=arr[0]){ 
              console.log(`move from ${i}`)
          }else{
              console.log(`move till ${i-1}`)
          }
        }
    }
}
  (minimumConsicutiveFlip([0,1,1,0,0,1,1,0]))