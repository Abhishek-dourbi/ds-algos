// function countUniqueValues(arr) {
// 	let res = {
// 		total: 0
// 	}
// 	for(let i = 0; i < arr.length; i++) {
// 		if(!res[arr[i]]) {
// 			res[arr[i]] = 1;
// 			res.total += 1;
// 		}
// 	}
// 	console.log(res)
// }


// Alter

// function countUniqueValues(arr) {
// 	let i = 0;
// 	let j = 1;
// 	total = 1;
// 	while(j < arr.length) {
// 		if(arr[i] !== arr[j]) {
// 			total++;
// 			i = j;
// 			j++
// 		} else{
// 			j++
// 		}
// 	}
// 	return total;
// }

// Alter

function countUniqueValues(arr) {
	let i = 0;
	for(let j = 1; j < arr.length; j++) {		
		if(!(arr[i] === arr[j])) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));