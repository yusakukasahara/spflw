// Question 1 -- sortByStrings(s, t): Sort the letters in the string s by the order they occur in the string t.You can assume t will not have repetitive characters.For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByString(s, t) {
  var sorted = '';
  var sArr = s.split('');
  for (var i = 0; i < t.length; i++) {
    var matches = sArr.filter(chr => chr === t[i]).join('');
    sorted += matches;
  }
  return sorted;
}

var s = 'weather';
var t = 'therapyw';
console.log(sortByString(s, t) === 'theeraw');

var s = 'good';
var t = 'odg';
console.log(sortByString(s, t) === 'oodg');
