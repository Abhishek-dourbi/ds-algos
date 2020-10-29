let a = [1,4,6]
let b = [2,5,8,9]
function merge(a, b) {
	let i = 0;
	let j = 0;
	let res = [];

	while(i < a.length && j < b.length) {
	    if(a[i] <= b[j]) {
	        res.push(a[i])
	        i++
	    } else {
	        res.push(b[j]);
	        j++
	    }
	}
	while(i < a.length) {
		res.push(a[i])
        i++
	}
	while(j < b.length) {
		res.push(b[j]);
        j++
	}
	return res;
}

console.log(merge(a, b))