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

const maximumDiffrenseGood = (arr) => {
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[max] && i > min) {
      max = i;
    } else if (arr[i] < arr[min] && i < max) {
      min = i;
    }
  }
  return arr[max] - arr[min];
};
console.log(maximumDiffrenseGood(array));
