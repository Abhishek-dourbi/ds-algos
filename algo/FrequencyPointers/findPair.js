function findPair(arr, num) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(num - arr[i] in obj || num + arr[i] in obj || arr[i] - num in obj) {
            return true;
        }
        obj[arr[i]] = true;
    }
    return false
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2))