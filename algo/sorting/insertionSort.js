// function insertionSort(arr) {
// 	for(let i = 1; i < arr.length; i++) {
// 		let ele = arr[i];
// 		for(let j = i - 1; j >= 0; j--) {
// 			if(arr[j] > ele) {
// 				arr[j+1] = arr[j];
// 			}
// 			if(j === 0 && arr[j] > ele) {
// 				arr[j] = ele
// 			}
// 			if(arr[j] < ele) {
// 				arr[j+1] = ele;
// 				break;
// 			}
// 		}
// 		console.log(arr)
// 	}
// 	return arr
// }

// let insertionSort = (inputArr) => {
//     let length = inputArr.length;
//     for (let i = 1; i < length; i++) {
//         let key = inputArr[i];
//         let j = i - 1;
//         while (j >= 0 && inputArr[j] > key) {
//             inputArr[j + 1] = inputArr[j];
//             j = j - 1;
//         }
//         inputArr[j + 1] = key;
//     }
//     return inputArr;
// };

function insertionSort(arr) {
	for(let i = 1; i < arr.length; i++) {
		let ele = arr[i];
		for(var j = i - 1; j >= 0 && arr[j] > ele; j--) {
			arr[j+1] = arr[j];
		}
		arr[j+1] = ele;
	}
	return arr;
}


// Time complexity

// best case = O(n);
// worst case = O(n^2);
// acerage case = O(n^2);

// space complexity
// O(1)

// good for almost sorted array
// when we have to add the element coming live in an array as we keep one side of array sorted in insertion

console.log(insertionSort([3,14,2,6,1,5]))