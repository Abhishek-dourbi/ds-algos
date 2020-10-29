function getDigit(num, place) {
	return Math.floor(num / Math.pow(10, place)) % 10;
}

function getNumLength(num) {
	// let len = 0;
	// while(num % 10) {
	// 	num = Math.floor(num / 10);
	// 	len++
	// }
	// return len;

	if(num === 0) return 1;
	return Math.floor(Math.log10(num)) + 1;e
}

function mostDigits(arr) {
	let max = 0;
	for(let i = 0; i < arr.length; i++) {
		max = Math.max(max, getNumLength(arr[i]))
	}
	return max;
}

console.log(mostDigits([1,345,6,232467,7754]))