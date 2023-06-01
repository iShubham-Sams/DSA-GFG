const stockPrice = [1, 5, 3, 8, 12];

const maxProfit = (arr, start, end) => {
  if (end <= start) {
    return 0;
  }
  let profit = 0;

  for (let i = start; i < end; i++) {
    for (let j = i + 1; j <= end; j++) {
      if (arr[j] > arr[i]) {
        let currentProfit =
          arr[j] -
          arr[i] +
          maxProfit(arr, start, i - 1) +
          maxProfit(arr, j + 1, end);
        profit = Math.max(profit, currentProfit);
      }
    }
    return profit;
  }
};

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
