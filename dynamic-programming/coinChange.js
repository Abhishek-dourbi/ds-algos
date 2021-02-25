function coinChange(deno, val){
  let arr = [];
  let ways = [];
  for(let i = 0; i <= val; i++) {
      arr.push(i);
      if(i === 0) {
          ways.push(1);
      } else {
          ways.push(0);
      }
  } 
  for(let i = 0; i < deno.length; i++) {
      for(let j = 1; j < ways.length; j++) {
          if(deno[i] <= arr[j]) {
              ways[j] = ways[arr[j] - deno[i]] + ways[j]  
          }  
      }
  }
  return ways[ways.length - 1];
}


let denominations = [1, 5, 10, 25];
console.log(coinChange(denominations, 1));