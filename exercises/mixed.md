### In-Place Palindrome Checker

``` js
/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
  if (str.length <= 1)
    return true;

  return (str[0] === str[str.length - 1]) &&
         (isPalindrome(str.substr(1, str.length - 2)));
}
```
### Fibonacci While loop
``` js
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
```

### Fibinacci with Memoization

``` js
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
```
