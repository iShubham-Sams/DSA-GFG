// give sum of number digit

const sumOfDigit = (num, sum) => {
  if (num <= 0) {
    return sum;
  }
  const lastNum = num % 10;
  const afterRemoveLast = Math.floor(num / 10);
  return sumOfDigit(afterRemoveLast, sum + lastNum);
};

console.log(sumOfDigit(0, 0));
