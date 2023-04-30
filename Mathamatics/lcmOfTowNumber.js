let firstNum = 15;
let secondNum = 18;
// base of this solution is a*b = gcd(a,b) * lcm(a,b)

const gcd = (a, b) => {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};
const lcmFun = () => {
  return (firstNum * secondNum) / gcd(firstNum, secondNum);
};

const ans = lcmFun();
console.log(ans);
