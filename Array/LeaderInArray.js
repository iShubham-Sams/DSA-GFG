const array = [7, 10, 4, 3, 6, 5, 2];

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
