function pivot(arr, start = 0, end = arr.length - 1) {
	function swap(array, i, j) {
		let temp = array[j];
		array[j] = array[i];
		array[i] = temp;
	} 


	let first = arr[start];
	let j = start;

	for(let  i = start + 1; i <= end; i++) {
		if(first > arr[i]) {
			j++;
			swap(arr, i, j);
		}
	}

	swap(arr, j, start);
	return j;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if(left < right) {
		let index = pivot(arr, left, right);
		quickSort(arr, 0, index - 1);
		quickSort(arr, index+1, right);
	}
	return arr;
}

console.log(quickSort([11, 10, 6, 50, 43, 40, 30, 42, 20, 40, 19, 32, 20, 41, 23, 27, 5]))

// Time complexity

// best case - O(n logn);
// worst case = O(n^2); (nearly sorted)
// average case = O(n logn);

// Space complexity 
// O(logn)