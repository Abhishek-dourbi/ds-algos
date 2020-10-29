// function naiveSearch(long, short) {
// 	let i = 0;
// 	let j = 0;
// 	while(i < long.length && j < short.length) {
// 		if(long[i] !== short[j]) {
// 			j = 0;
// 		} else {
// 			j++;
// 		}
// 		i++;
// 	}
// 	return j === short.length ? true : false;
// }

function naiveSearch(long, short) {
	let res = 0;
	for(var i = 0; i < long.length; i++) {
		for(var j = 0; j < short.length; j++) {
			if(short[j] !== long[i+j]) break;
		}
		if(j === short.length) res++
	}
	return res;
}

console.log(naiveSearch('hello my name is jay', 'a'));