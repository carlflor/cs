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

### Reverse 32bit integer

``` js

// faster
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i += 1) {
        result <<= 1;
        if (n & 1 === 1) {
            result += 1;
        }
        n >>= 1;
    }
    return result >>> 0;
};

// simpler code
var reverseBits = function(n) {
  return parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
};
```

### Plus One an integer array

``` js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  let pointer = digits.length - 1;

  while(pointer > -1) {
    const temp = digits[pointer];
    const increment = temp + 1

    if (increment == 10) {
      digits[pointer] = 0
      pointer--;
    } else {
      digits[pointer] = increment
      return digits;
    }

  }

  return [1, ...digits];

};
```

### Binary Search

``` js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```
