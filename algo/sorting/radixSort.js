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

function radixSort(arr) {
	let len = mostDigits(arr);

	for(let i = 0; i < len; i++) {
		let res = [];
		let newArr = new Array(10).fill([]);
		for(let j = 0; j < arr.length; j++) {
			newArr[getDigit(arr[j], i)] = newArr[getDigit(arr[j], i)].concat(arr[j]);
		}
		for(let z = 0; z < newArr.length; z++) {
			res = res.concat(newArr[z]);
		}
		arr = res;
	}
	return arr;
}

// alter
// function radixSort(arr) {
// 	let maxDigitCount = mostDigits(arr);
// 	for(let k = 0; k < maxDigitCount; k++) {
// 		let digitBuckets = Array.from({length: 10}, () => []);
// 		for(let i = 0; i < arr.length; i++) {
// 			let digit = getDigit(arr[i], k);
// 			digitBuckets(digit).push(arr[i]); 
// 		}
// 		arr = [].concat(...digitBuckets); 
// 	}
// 	return arr
// }

console.log(radixSort([54, 1,345,6,232467,7754, 66]))

// Time complexity

// best case - O(nk);
// worst case = O(nk);
// average case = O(nk);

// k - word size

// for array containing all distinct elements - O(nlogn)

// Space complexity 

// O(n + k)

