function minCoinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  
  let result = [];
  for(let i = 0; i < coins.length; i++) {
      if(amount >= coins[i]) {
          for(let j = 0; j < Math.floor(amount/coins[i]); j++) {
              result.push(coins[i]);
          }
          amount = amount % coins[i];  
      }
  }
  return result;
}

let deno = [1,5];
console.log(minCoinChange(deno, 11));