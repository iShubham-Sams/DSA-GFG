const array = [0, 1, 1, 1, 1, 0, 0, 1, 0];

const getMaximumCunsicutive = (arr) => {
  let maxCunsicutive = 1;
  let currenCunsicuive = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currenCunsicuive++;
      if (currenCunsicuive > maxCunsicutive) {
        maxCunsicutive = currenCunsicuive;
      }
    } else {
      currenCunsicuive = 1;
    }
  }
  return maxCunsicutive;
};
console.log(getMaximumCunsicutive(array));
