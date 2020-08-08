// function isAnagram(str1, str2) {
// 	let obj1 = {};
// 	let obj2 = {};
// 	for(let i = 0; i < str1.length; i++) {
// 		obj1[str1.charAt(i)] = (obj1[str1.charAt(i)] || 0) + 1;
// 	}
// 	for(let i = 0; i < str2.length; i++) {
// 		obj2[str2.charAt(i)] = (obj2[str2.charAt(i)] || 0) + 1;
// 	}
// 	for(let ele in obj1) {
// 		if(obj1[ele] !== obj2[ele]) return false	
// 	}
// 	return true;
// }



// alter

function isAnagram(str1, str2) {
	let obj = {};
	if(str1.length !== str2.length) {
		return false;
	}
	for(let i = 0; i < str1.length; i++) {
		obj[str1.charAt(i)] = (obj[str1.charAt(i)] || 0) + 1;
	}
	for(let i = 0; i < str2.length; i++) {
		if(!obj[str2[i]]) {
			return false;
		} else {
			obj[str2[i]] -= 1;
		}
	}
	return true;
}

console.log(isAnagram('abhishek', 'bhiashfk'))