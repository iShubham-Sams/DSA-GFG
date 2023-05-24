const array = [8, 5, 0, 10, 0, 20];

const moveZeroToEnd = (arr) => {
  let vl = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[vl];
      arr[vl] = temp;
      vl++;
    }
  }
  return arr;
};
console.log(moveZeroToEnd(array));
