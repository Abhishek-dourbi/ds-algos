function collectStrings(obj) {
    let res = [];
    
    for(let key in obj) {
        if(typeof(obj[key]) === "object") {
            res = res.concat(collectStrings(obj[key]));
        } else if(typeof(obj[key]) === "string") {
            res.push(obj[key]);
        } else {}
    }
    
    return res;
}