// Question 3 -- changePossibilities(amount, amount): Your quirky boss collects rare, old coins.They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

//   Example: for amount = 4(4¢) and denominations = [1, 2, 3](1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount, coins) {
  var counter = 0;
  var sortedCoins = coins.sort((a, b) => a - b);

  (function recurse(index, remainder) {
    var coin = sortedCoins[index];
    if (index === 0) {
      remainder % coin === 0 && counter++;
      return;
    }
    while (remainder >= 0) {
      recurse(index - 1, remainder);
      remainder -= coin;
    }
  })(sortedCoins.length - 1, amount);

  return counter;
}

var coins = [2, 1, 3];
var amount = 4;
console.log(changePossibilities(amount, coins) === 4);
