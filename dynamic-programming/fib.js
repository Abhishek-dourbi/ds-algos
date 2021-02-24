function fib_rec(n) {
	if(n <= 2) return 1;
	return fib_rec(n - 1) + fib_rec(n - 2);
}

// TIme complexity
// O(2^n);

// enter memoization

function fib_memo(n, memo = []) {
	if(memo[n]) return memo[n];
	if(n <= 2) return 1;
	const res = fib_memo(n-1, memo) + fib_memo(n-2, memo);
	memo[n] = res;
	return res;
}

// TIme complexity
// O(n);

// enter tabulation

function fib_table(n) {
	const fibNums = [0, 1, 1];

	for(let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[n];
}

// TIme complexity
// O(n);

console.log(fib_table(10000))