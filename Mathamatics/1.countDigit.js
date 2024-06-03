// Given a number N, the task is to return the count of digits in this number.


let x = 47888;
let length = x.toString().length;
let countDigit = 0;
for (let i = 0; i < length; i++) {
  countDigit++;
}
// console.log(countDigit);

// removing last digit method
let lastRemoveCoount = 0;
while (x > 0) {
  if (x == 0) {
    return;
  }
  x = Math.floor(x / 10);
  lastRemoveCoount++;
}
console.log(lastRemoveCoount);
