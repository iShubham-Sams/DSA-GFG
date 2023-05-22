const arr = [5, 20, 12, 20, 10];
// naiv solution
const LargestElement = (arr) => {
  let large = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
};
const SecondLargest = (arr) => {
  const largest = LargestElement(arr);
  let secondlarge = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== largest) {
      if (secondlarge == -1) {
        secondlarge = arr[i];
      } else if (arr[i] > secondlarge) {
        secondlarge = arr[i];
      }
    }
  }
  return secondlarge;
};

// console.log(SecondLargest(arr));

const LiniarSecondLargest = (arr) => {
  let resu = -1;
  let large = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[large]) {
      resu = large;
      large = i;
    } else if (arr[i] !== arr[large]) {
      if (resu === -1 || arr[i] > arr[resu]) {
        resu = i;
      }
    }
  }
  return resu;
};
console.log(LiniarSecondLargest(arr));
