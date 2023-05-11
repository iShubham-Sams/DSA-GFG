const cuttingTheRopeEquel = (num, a, b, c) => {
  if (num == 0) {
    return 0;
  }
  if (num < 0) {
    return -1;
  }
  let result = Math.max(
    cuttingTheRopeEquel(num - a, a, b, c),
    cuttingTheRopeEquel(num - b, a, b, c),
    cuttingTheRopeEquel(num - c, a, b, c)
  );
  if (result == -1) {
    return -1;
  }
  return (result = result + 1);
};

console.log(cuttingTheRopeEquel(23, 11, 9, 12));
