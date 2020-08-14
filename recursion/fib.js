// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(num){
//   let res = [];
  
//   function helper(nextNum, count) {
//       if(!count) return res;
//       res.push(nextNum < 2 ? 1 : res[nextNum - 1] + res[nextNum - 2])
//       return helper(nextNum+1, count-1);
//   }
  
//   helper(0, num);
//   return res[res.length - 1];
// }

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}