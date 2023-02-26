const maxProfit = (price, start, end) => {
  if (end <= start) return 0;

  // Initialise the profit
  let profit = 0;

  for (let i = start; i < end; i++) {
    for (let j = i + 1; j <= end; j++) {
      if (price[j] > price[i]) {
        // Update the current profit
        let curr_profit =
          price[j] -
          price[i] +
          maxProfit(price, start, i - 1) +
          maxProfit(price, j + 1, end);

        profit = Math.max(profit, curr_profit);
      }
    }
  }
  return profit;
};

// Driver program

let price = [345, 556, 330, 455, 590, 490, 310, 450];
let n = price.length;

const result = maxProfit(price, 0, n - 1);

console.log(result);
