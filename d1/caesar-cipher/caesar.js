const encrypt = function(plaintext, key) {
  const input = plaintext.split(' ');
  return input.map(word => encryptWord(word, key)).join(' ');
};

const encryptWord = function(word, key){
  let encrypted = '';
  for (let i = 0; i < word.length; i++){
    // upper case
    if (word.charCodeAt(i) < 90){
      let newCharCode = word.charCodeAt(i) + key;
      if (newCharCode <= 90 && newCharCode >= 65){
        encrypted += String.fromCharCode(newCharCode);
      } else if (newCharCode < 65){
        encrypted += String.fromCharCode(newCharCode + 26);
      } else {
        encrypted += String.fromCharCode(newCharCode - 26);
      }
    } else {
      // lower case
      let newCharCode = word.charCodeAt(i) + key;
      if (newCharCode >= 97 && newCharCode <= 122){
        encrypted += String.fromCharCode(newCharCode);
      } else if (newCharCode < 97){
        encrypted += String.fromCharCode(newCharCode + 26);
      } else {
        encrypted += String.fromCharCode(newCharCode - 26);
      }
    }
  }
  return encrypted;
}

module.exports = { encrypt };