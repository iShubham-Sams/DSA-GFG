const allFactore = (num) => {
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
      if (i != num / i) {
        console.log(num / i);
      }
    }
  }
};
// allFactore(6);

// for shorted order

const shortedOrder = (num) => {
  let i;
  for (i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
  for (; i >= 1; i--) {
    if (num % i == 0) {
      console.log(num / i);
    }
  }
};

shortedOrder(15);
