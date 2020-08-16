function capitalizeWords (arr) {
  let res = [];
  if(!arr.length) return res;
  
  res.push(arr[0].toUpperCase());
  res = res.concat(capitalizeWords(arr.slice(1)));
  return res;
}