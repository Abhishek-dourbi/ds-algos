function minSubArrayLen(arr, num) {
    let start = 0;
    let end = 0;
    let total = 0;
    let len = Infinity;
    
    while(start < arr.length) {
        if (end < arr.length && total < num) {
            total += arr[end];
            end++;
        } else if (total >= num) {
            total -= arr[start];
            len = Math.min(len, end-start);
            start++;
        } else {
            break;
        }
    }
    return len === Infinity ? 0 : len;
}