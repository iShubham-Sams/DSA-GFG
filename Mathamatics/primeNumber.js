// all natural number divided into two part prime and  composite number
// 1 is not prime nor composit
// 2 is only even prime number

const checkPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return true;
    } else {
      return false;
    }
  }
};
// const ans = checkPrime(6);
// console.log(ans);

// optimize solution

const optimizePrime = (num) => {
  let squerRoot = Math.floor(Math.sqrt(num));
  if (num == 1) {
    return false;
  }
  for (let i = 2; i <= squerRoot; i++) {
    if (num / i == 0) {
      return true;
    } else {
      return false;
    }
  }
};

// const optimizeAnds = optimizePrime(199);
// console.log(optimizeAnds);

// more optimize solution

const mostEfficeantSolution = (num) => {
  if (num == 1) {
    return false;
  } else if (num == 2 || num == 3) {
    return true;
  } else if (num % 2 == 0) {
    return false;
  } else if (num % 3 == 0) {
    return false;
  } else {
    for (let i = 5; i * i <= num; i = i + 6) {
      if (num % i == 0 || num % (i + 2) == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
};
console.log(mostEfficeantSolution(4));
