const array = [2, 3, 10, 6, 4, 8, 1];

// const maximumDiffrense = (arr) => {
//   let maxdiff = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] - arr[i] > maxdiff) {
//         maxdiff = arr[j] - arr[i];
//       }
//     }
//   }
//   return maxdiff;
// };
// console.log(maximumDiffrense(array));
const maxDiff=(arr,n)=>{
    let dif=0
    let min=arr[0]
    for(let i=1;i<n;i++){
       if(arr[i]>min){
           maxDiff=Math.max(dif,arr[i]-min)
       } else if(arr[i]<min){
           min=arr[i]
       }
    }
    console.log(dif)
}
maxDiff(array,6)


