let a = 15;
let b = 12;
while (a !== b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}
// console.log(a);

// recursive function for eucliclean algorithe
let first = 12;
let second = 15;
const recusivFun = (a, b) => {
  if (b == 0) {
    return a;
  } else {
    return recusivFun(b, a % b);
  }
};
let man = recusivFun(first, second);
console.log(man);
