const computingPoewer = (num, pow) => {
  let result = 1;
  for (let i = 1; i <= pow; i++) {
    result = result * num;
  }
  return result;
};
// console.log(computingPoewer(5, 0));

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
