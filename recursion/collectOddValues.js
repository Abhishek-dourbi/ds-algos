// function oddNum(num) {
//     let arr = [];
    
//     function rec(num) {
//         if(!num) return;
//         if(num % 2) arr.push(num);
//         return rec(num-1);
//     }

//     rec(num)
    
//     return arr;
// }

// oddNum(10)


// using helper method

function collectOddValues(arr) {
	let res = [];

	function helper(redArr) {
		if(!redArr.length) return;

		if(redArr[0] % 2) res.push(redArr[0]);
		helper(redArr.slice(1));
	}

	helper(arr);
	return res;
}

// pure recursion

function collectOddValues(arr) {
	let newArr = [];

	if(!arr.length) return newArr;

	if(arr[0] % 2) newArr.push(arr[0]);

	newArr = newArr.concat(collectOddValues(arr.slice(1)));

	return newArr;
}


collectOddValues([1,2,3,4,5,6,7,8,9])