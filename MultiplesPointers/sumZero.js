function sumZero(arr) {
	let i = 0;
	let j = arr.length - 1;
	while(j > i) {
		let sum = arr[i] + arr[j];
		if(sum === 0) {
			return [arr[i], arr[j]];
		}
		else if(sum > 0) {
			j--;
		} else(sum < 0) {
			i++;
		}
	}
	return undefined;
}

console.log('res',sumZero([-3,1,2,5]));