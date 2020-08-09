function sameFrequency(num1, num2){
  let str1 = num1.toString();
  let str2 = num2.toString();
  
  let obj = {};
  
  if(str1.length !== str2.length) return false;
  
  for(let i = 0; i < str1.length; i++) {
      obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }
  
  for(let i = 0; i < str2.length; i++) {
      if(!obj[str2[i]]) return false;
      else {
          obj[str2[i]] -= 1;
      }
  }
  return true;
}

complexity = O(n);