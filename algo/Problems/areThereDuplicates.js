// Frequency counter

function areThereDuplicates(...args) {
  let obj = {};
  for(let i = 0; i < args.length; i++) {
      if(obj[args[i]]) return true
      else {
          obj[args[i]] = 1;
      }
  }
  return false;
}

// Multiple pointers

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// one liner

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}