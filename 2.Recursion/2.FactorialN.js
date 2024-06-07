const getFactorialN = (num, ans) => {
  if (num <= 1) {
    return ans;
  }

  return getFactorialN(num - 1, ans * num);
};

// console.log(getFactorialN(5, 1));

