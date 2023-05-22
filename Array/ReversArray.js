const array = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const ReversArray = (arr) => {
  let small = 0;
  let large = arr.length - 1;
  while (small < large) {
    let temp = arr[small];
    arr[small] = arr[large];
    arr[large] = temp;
    small++;
    large--;
  }
  return arr;
};
console.log(ReversArray(array));
