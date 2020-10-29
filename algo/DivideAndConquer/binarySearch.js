function search(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	while(start <= end) {
		let mid = Math.floor((start + end)/2);
		if(num < arr[mid]) {
			end = mid - 1;
		} else if (num > arr[mid]) {
			start = mid + 1;
		} else {
			return mid
		}
	}
	return -1;
}

console.log(search([1,2,3,4,5,8,10,13,59], 4))