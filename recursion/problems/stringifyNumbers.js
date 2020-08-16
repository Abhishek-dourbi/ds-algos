function stringifyNumbers(obj) {
    let res = {};
    
    for(let val in obj) {
        if(typeof(obj[val]) === "object" && !Array.isArray(obj[val])) {
            res[val] = stringifyNumbers(obj[val]);
        } else if(typeof(obj[val]) === "number") {
            res[val] = obj[val].toString();
        } else {
            res[val] = obj[val];
        }
    }    
    
    return res;
}