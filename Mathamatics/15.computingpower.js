// Given two integers x and n, write a function to compute xn. We may assume that x and n are small and overflow doesn’t happen.

const efficentAns = (num, pow) => {
  if (pow == 0) {
    return 1;
  }
  let halfPow = Math.floor(pow / 2);
  let temp = efficentAns(num, halfPow);
  temp = temp * temp;
  if (pow % 2 == 0) {
    return temp;
  } else {
    return temp * num;
  }
};
console.log(efficentAns(5, 8));
