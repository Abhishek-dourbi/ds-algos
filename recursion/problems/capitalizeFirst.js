function capitalizeFirst (arr) {
  let newArr = [];
  if(!arr.length) return newArr;
  
  let ele = arr[0];
  newArr.push(ele[0].toUpperCase() + ele.slice(1));
  
  newArr = newArr.concat(capitalizeFirst(arr.splice(1)));
  return newArr;
}

// alter

// function capitalizeWords (array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length-1)[0].toUpperCase());
//   return res;
 
// }

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
