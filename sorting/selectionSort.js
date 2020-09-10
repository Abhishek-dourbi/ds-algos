function selectionSort(arr) {
	for(let i = 0; i < arr.length; i++) {
		let min = i;
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[min]) {
				min = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return arr
}

console.log(selectionSort([7,2,9,1,3,8,9]));

// Use to minimize swaps