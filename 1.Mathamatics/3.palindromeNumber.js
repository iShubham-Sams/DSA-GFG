let num = 123321;
let tempOriginNum = num;
let revers = 0;

for (let i = 0; tempOriginNum > 0; i++) {
  let tem = tempOriginNum % 10;
  revers = revers * 10 + tem;
  tempOriginNum = Math.floor(tempOriginNum / 10);
}
// console.log(num === revers);
// Given an integer, write a function that returns true if the given number is palindrome, else false. For example, 12321 is palindrome, but 1451 is not palindrome. 

const checkPalindrome=(x)=>{
  let low=0
  let hei=x.toString().length-1
  while(low<=hei){
    let st=x.toString()[low]
    let en=x.toString()[hei]
    if(st!=en){
      return false
    }
    low++
    hei--
  }
  return true
}

console.log(checkPalindrome(num));