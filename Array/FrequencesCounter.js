const array = [10, 10, 10, 25, 30, 25];

const frequencyCount = (arr) => {
  const ans = {};
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    if (ans[temp] >= 1) {
      ans[temp]++;
    } else [(ans[temp] = 1)];
  }
  return ans;
};
// console.log(frequencyCount(array));
