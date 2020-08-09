// function maxSubArraySum(arr, num) {
// 	if(num > arr.length) return null

// 	let res = 0;
// 	for(let i = 0; i < num; i++) {
// 		res += arr[i];
// 	}

// 	for(let i = num; i < arr.length; i++) {
// 		if(res < res - arr[i - num] + arr[i]) {
// 			res = res - arr[i - num] + arr[i];
// 		}
// 	}
// 	return res;
// }


// alter

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// naive

// function maxSubarraySum(arr, num) {
//   if ( num > arr.length){
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i ++){
//     temp = 0;
//     for (let j = 0; j < num; j++){
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));