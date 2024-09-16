const isPair = (array, start, end, howMuch) => {
  while (start < end) {
    const sum = array[start] + array[end];
    if (sum == howMuch) {
      return true;
    }
    if (sum > howMuch) {
      end = end - 1;
    } else {
      start = start + 1;
    }
  }
  return false;
};

const tripletSolution = (arr, result) => {
  for (let i = 0; i < arr.length - 2; i++) {
    if (isPair(arr, i + 1, arr.length - 1, result - arr[i])) {
      return true;
    }
  }
  return false;
};
console.log(tripletSolution([2, 4, 8, 9, 11, 12, 20, 30], 24));
