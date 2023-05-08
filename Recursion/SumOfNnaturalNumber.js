const SumN = (num, sum) => {
  if (num <= 0) {
    return sum;
  }

  return SumN(num - 1, sum + num);
};

console.log(SumN(5, 0));
