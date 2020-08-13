function findLongestSubstring(str){
    let start = 0;
    let len = 0;
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        if(str[i] in obj) {
            start = Math.max(start, obj[str[i]]);
        }
        
        len = Math.max(len, i - start + 1);
        obj[str[i]] = i + 1;
    }
    return len;
}