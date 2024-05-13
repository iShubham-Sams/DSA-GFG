// const sumOfDigit = (num, sum) => {
//   if (num <= 0) {
//     return sum;
//   }
//   const lastNum = num % 10;
//   const afterRemoveLast = Math.floor(num / 10);
//   return sumOfDigit(afterRemoveLast, sum + lastNum);
// };

// console.log(sumOfDigit(0, 0));


let sum=0
const sumOfdigit=(n)=>{
  if(n<=0){
    return sum
  }
   sum=sum+(n%10)
  return sumOfdigit(Math.floor(n/10))
}
console.log(sumOfdigit(99999));