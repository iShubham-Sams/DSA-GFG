const arr = [10, 5, 20, 8, 15, 3, 25];

const LargestElement = (arr) => {
  let largest = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] > largest) {
      largest = arr[i + 1];
    }
  }
  return largest;
};
// console.log(LargestElement(arr));

const gfgLargestElement = (arr) => {
  let large = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[large]) {
      large = i;
    }
  }
  return large;
};
console.log(gfgLargestElement(arr));
