const stockPrice = [1, 5, 3, 8, 12];
const maxProfitSolution = (arr) => {
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      profit += arr[i] - arr[i - 1];
    }
  }
  return profit;
};

// console.log(maxProfit(stockPrice, 0, 4));
