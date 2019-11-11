function repeatedWord(str) {
  const arr = str.toLowerCase().replace(/[.,#!$%^&*;:{}=\-_`~()]/g, '').split(' ');
  const obj = {};
  for(let i = 0; i < arr.length; i++) {
    if(obj[arr[i]]) return arr[i];
    else obj[arr[i]] = 1;
  }
  return null;
}

module.exports = repeatedWord;
