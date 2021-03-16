function onlyPrime(arr) {
	let res = [];
	for(let i = 0; i < arr.length; i++) {
		let prime = true;
		if(arr[i] === 1 || arr[i] === 0) prime = false;
		for(let j = 2; j <= Math.floor(Math.sqrt(arr[i])); j++) {
		 	if(arr[i] % j === 0) {
		 		prime = false;
		 		break;
		 	}
		}
		if(prime) res.push(arr[i]);
	}
	return res;
}


console.log(onlyPrime([1,2,3,5,4,7,9]))