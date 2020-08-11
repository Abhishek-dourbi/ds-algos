function averagePair(arr, tarAvg){
  let i = 0;
  let j = arr.length - 1;
  while(i <= j) {
      let avg = (arr[i] + arr[j]) / 2;
      if(avg === tarAvg) {
          return true;
      } else if(avg > tarAvg) {
          j--;
      } else if(avg < tarAvg) {
          i++
      }
  }
  return false;
}