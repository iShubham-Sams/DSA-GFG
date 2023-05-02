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
      }
      return true;
    }
    return true;
  }
};
const allPrimeNumber = (num) => {
  for (let i = 1; i <= num; i++) {
    if (mostEfficeantSolution(i)) {
      console.log(i);
    }
  }
};

allPrimeNumber(10);
