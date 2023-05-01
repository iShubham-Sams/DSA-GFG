const printPrime = (num) => {
  if (num <= 1) false;
  for (let i = 2; i * i <= num; i++) {
    while (num % i == 0) {
      console.log(i);
      num = num / i;
    }
  }
  //   if (num > 1) {
  //     console.log(num);
  //   }
};

// printPrime(450);

// more efficent ans

const efficentPrime = (num) => {
  if (num <= 1) false;
  while (num % 2 == 0) {
    console.log(2);
    num = num / 2;
  }
  while (num % 3 == 0) {
    console.log(3);
    num = num / 3;
  }
  for (let i = 5; i * i <= num; i = i + 6) {
    while (num % i == 0) {
      console.log(i);
      num = num / i;
    }
    while (num % (i + 2) == 0) {
      console.log(i + 2);
      num = num / (num + 2);
    }
  }
  if (num > 3) {
    // console.log(num);
  }
};

efficentPrime(450);
