// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodedString(str) {
  var current = str.match(/^\d*\[\D*/)[0];
  var times = current.match(/^\d*/)[0];
  var chars = current.match(/[a-z]+|[A-Z]+/)[0];
  var inner = str.substr(current.length, str.length - current.length - 1);
  if (inner.length === 0) {
    return makeString(times, chars);
  }
  return makeString(times, chars + decodedString(inner));
}

function makeString(n, str) {
  var output = '';
  for (var i = 0; i < n; i++) {
    output += str;
  }
  return output;
}

var s = '4[ab]';
console.log(decodedString(s) === 'abababab');

var s = '2[b3[a]]';
console.log(decodedString(s) === 'baaabaaa');

var s = '1[aaa2[bb10[c]]]';
console.log(decodedString(s) === 'aaabbccccccccccbbcccccccccc');
