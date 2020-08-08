function same(arr1, arr2) {
	let freqCounter1 = {};
	let freqCounter2 = {};	
	for(let val of arr1) {
		freqCounter1[val] = (freqCounter1[val] || 0) + 1;
	}
	for(let val of arr2) {
		freqCounter2[val] = (freqCounter2[val] || 0) + 1;
	}
	for(let val in freqCounter1) {
		if(!(val ** 2 in freqCounter2)) {
			return false
		}
		if(freqCounter2[val**2] !== freqCounter1[val]) {
			return false
		}
		return true;
	}
}

console.log(same([1,2,3], [4,9,2]))