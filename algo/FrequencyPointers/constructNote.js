function constructNote(message, letters){
  let lettersObj = {};
  for(let i = 0; i < letters.length; i++) {
      lettersObj[letters[i]] = lettersObj[letters[i]] + 1 || 0;
  }
  for(let i = 0; i < message.length; i++) {
      if(lettersObj[message[i]]) {
          lettersObj[message[i]] = lettersObj[message[i]] - 1;
      } else {
          return false;
      }
  }
  return true;
}

console.log(constructNote('abc', 'dcba'));