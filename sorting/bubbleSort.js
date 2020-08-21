// alter

// function bubble(arr) {
// 	const swap = (arr, index1, index2) => {
// 		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// 	}

// 	for(let i = arr.length - 1; i >= 0; i--) {
// 		for(let j = 0; j < i; j++) {
// 			if(arr[j] > arr[j+1]) {
// 				swap(arr, j, j+1);
// 			}
// 		}
// 	}
// 	return arr;
// }

function bubble(arr) {
	for(let i = arr.length - 1; i >= 0; i--) {
		for(let j = 0; j < i; j++) {
			if(arr[j] > arr[j+1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

console.log(bubble([2,3,1,5,4]))