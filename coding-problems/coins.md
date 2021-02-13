Coins DP

Count the number of possibilities to represent n cents with the following coins:
1, 5, 10, 25

``` js
function getCoins(count) {
  const memo = {};

  get(memo, count)
}

function get(memo, count) {
  if (memo[count] != undefined) {
    return memo[count];
  }

  if (count === 0) return 0;

  memo[count] = 1 + get(count - 25) + get(count - 10) + get(count - 5) + get(count - 1)
  return memo[count]
}
```
