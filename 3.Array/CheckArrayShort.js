const arr = [1, 2, 3, 4, 5, 2, 7, 8];

const arrayShort = (arr) => {
  let ans = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      ans = false;
    }
  }
  return ans;
};
console.log(arrayShort(arr));
