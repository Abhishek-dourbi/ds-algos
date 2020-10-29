function nestedEvenSum (obj) {
  let res = 0;     
  for(let val in obj) {
      if(typeof(obj[val]) === "object") {
          res += nestedEvenSum(obj[val]);
      } else if(typeof(obj[val]) === "number" && obj[val]%2 === 0) {
          res += obj[val];
      } else {}
  }
  return res;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10