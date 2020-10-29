// alter

// function flatten(arr){
//     let res = [];
    
//     function helper(helpArr) {
//         for(let  i = 0; i < helpArr.length; i++) {
//             if(Array.isArray(helpArr[i])) {
//                 helper(helpArr[i]);
//             } else {
//                 res.push(helpArr[i]);
//             }
//         }
//     }
    
//     helper(arr);
//     return res;
// }

function flatten(oldArr){
  var newArr = []
    for(var i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
  } 
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3