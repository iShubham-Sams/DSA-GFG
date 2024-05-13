const checkPalindrom = 12321;
const PalindromCheck = (num, revers) => {
  if (num == 0) {
    return checkPalindrom === revers;
  }
  const afterRemovingLast = Math.floor(num / 10);
  revers = revers * 10 + (num % 10);
  return PalindromCheck(afterRemovingLast, revers);
};

// console.log(PalindromCheck(checkPalindrom, 0));
let value = "ababa";
const checkStringPalindrom = (string, start, end) => {
  if (start >= end) {
    return true;
  }

  return (
    string.charAt(start) === string.charAt(end) &&
    checkStringPalindrom(string, start + 1, end - 1)
  );
};

// console.log(checkStringPalindrom(value, 0, value.length - 1));















const pala=(checkVal,first,last)=>{
  if(first>=last){
    return true
  }
  return (checkVal.charAt(first)==checkVal.charAt(last)&& pala(checkVal,first+1,last-1))
}

console.log(pala("malayalam", 0, "malayalam".length - 1));