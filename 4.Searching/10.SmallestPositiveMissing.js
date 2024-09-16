const missingNum = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= 0) {
      arr[i] = n + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    let ind = Math.abs(arr[i]) - 1;
    if (ind < n) {
      arr[ind] *= -1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
};
console.log(missingNum([3, 4, -1, 1]));
