const getFactorialN = (num, ans) => {
  if (num <= 1) {
    return ans;
  }

  return getFactorialN(num - 1, ans * num);
};

// console.log(getFactorialN(5, 1));

const getNthFibonachiNum = (num) => {
  if (num == 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }

  return getNthFibonachiNum(num - 1) + getNthFibonachiNum(num - 2);
};

console.log(getNthFibonachiNum(5));
