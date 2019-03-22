var urlify = function(str, length) {
  // have a pointer to check from start to end
  var strArr = str.split('');
  var pointer = 0;
  while (pointer < str.length) {
    if (strArr[pointer] === ' ') {
      // *** needs more work here, a little wierd
      // not handling trailing spaces properly
      for (var i = str.length - 1; i > pointer + 3; i--) {
        strArr[i] = str[i - 2];
      }
      strArr[pointer] = '%';
      strArr[pointer+1] = '2';
      strArr[pointer+2] = '0';
      console.log(strArr, strArr.length);
    } 
    pointer++;
  }
  // if character is a space, move remainder chars by two
  // replace following three chars with '%20'
  return strArr.join('');
};


// higher-level solutions

//using encode()

function urlify(string) {
  return encodeURI(string.trim())
}

console.log(urlify("My name is Rodrigo") === "My%20name%20is%20Rodrigo")

//using RegExp

function urlify(string) {
  let regExp = new RegExp('\\s', 'g')
  return string.trim().replace(regExp, '%20')
}

console.log(urlify("My name is Rodrigo    ") === "My%20name%20is%20Rodrigo")
