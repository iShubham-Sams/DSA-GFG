const wall = [3, 0, 1, 2, 5];

const getTotalStoreWater = (arr) => {
  let reuslt = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let lMax = arr[i];
    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, arr[j]);
    }
    let rMax = arr[i];
    for (let k = i + 1; k <= arr.length - 1; k++) {
      rMax = Math.max(rMax, arr[k]);
    }
    let minValue = Math.min(lMax, rMax);
    reuslt = reuslt + minValue - arr[i];
  }
  return reuslt;
};

console.log(getTotalStoreWater(wall));
