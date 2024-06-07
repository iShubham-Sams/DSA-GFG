const array = [1, 2, 3, 4, 5, 6];
const leftRotateByOne = (arr) => {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  return arr;
};
console.log(leftRotateByOne(array));
