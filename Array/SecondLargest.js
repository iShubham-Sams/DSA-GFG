const arr = [5, 20, 12, 20, 10];

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
