// const array = [7, 10, 4, 3, 6, 5, 2];

// const leaderInArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let flag = false;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] <= arr[j]) {
//         flag = true;
//         break;
//       }
//     }
//     if (flag == false) {
//       console.log(arr[i]);
//     }
//   }
// };
// leaderInArray(array);

const geeksLeaderInArray = (arr) => {
  let arraylength = arr.length;
  let currenLeader = arr[arraylength - 1];
  console.log(currenLeader);
  for (let i = arraylength - 2; i >= 0; i--) {
    if (arr[i] > currenLeader) {
      console.log(arr[i]);
      currenLeader = arr[i];
    }
  }
};

geeksLeaderInArray(array);

const leadersInArray=(arr)=>{
  const leaderArr=[arr[arr.length-1]]
   let leader=arr[arr.length-1]
   for(let i=arr.length-2;i>=0;i--){
      if(arr[i]>leader){
          leader=arr[i]
          leaderArr.unshift(leader)
      }
   }
   return leaderArr
}
console.log(leadersInArray([7,10,4,10,6,5,2]))

const array=[2, 3, 10, 6, 4, 8, 1]

const leader=(arr,n)=>{
    const leftLeader=new Array(n)
    let leader=arr[n-1]
    for(let i=n-1;i>=0;i--){
        if(array[i]>leader){
            leader=array[i]
           leftLeader[i]=leader
        }else{
            leftLeader[i]=leader
        }
    }
    for(let j=0;j<n;j++){
        if(arr[j]>=leftLeader[j]){
    console.log(arr[j])
            
        }
    }
}
leader(array,6)