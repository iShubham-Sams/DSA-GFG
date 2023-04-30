const n = 251;
let zero = 0;
// for (let i = 5; i <= n; i * 5) {
// }
let i = 5;
while (i <= n) {
  zero = Math.floor(zero + n / i);
  i = i * 5;
}
console.log(zero);
