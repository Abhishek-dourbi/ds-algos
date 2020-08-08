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


// alter

// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')

console.log(isAnagram('abhishek', 'bhiashfk'))