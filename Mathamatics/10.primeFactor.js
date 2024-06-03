// Prime factor is the factor of the given number which is a prime number. Factors are the numbers you multiply together 
// to get another number. In simple words, prime factor is finding which prime numbers multiply together to make the original number.
// Example: The prime factors of 15 are 3 and 5 (because 3×5=15, and 3 and 5 are prime numbers). 


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
    console.log(num);
  }
};

efficentPrime(450);
