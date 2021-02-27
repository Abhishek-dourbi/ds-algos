function findAllDuplicates(arr){
  let res = [];
  let obj = {};
  
  for(let i = 0; i < arr.length; i++) {
      if(obj[arr[i]] === 1) {
          res.push(arr[i]);
      } else {
          obj[arr[i]] = obj[arr[i]] + 1 || 1;
      }
  }
  return res;
}

console.log([4, 3, 2, 7, 8, 2, 3, 1]);

// finding elements occuring twice;