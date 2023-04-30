let num = 123321;
let tempOriginNum = num;
let revers = 0;

for (let i = 0; tempOriginNum > 0; i++) {
  let tem = tempOriginNum % 10;
  revers = revers * 10 + tem;
  tempOriginNum = Math.floor(tempOriginNum / 10);
}
console.log(num === revers);
