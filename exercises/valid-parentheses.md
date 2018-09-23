# Valid Parentheses

[Leet Code](https://leetcode.com/problems/valid-parentheses/description/)

### Description
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.


- Note that an empty string is also considered valid.

### Example
```
Example 1
Input: "()"
Output: true

Example 2
Input: "()[]{}"
Output: true

Example 3
Input: "(]"
Output: false

Example 4
Input: "([)]"
Output: false

Example 5
Input: "{[]}"
Output: true
```

### Solution

In my solution, I considered having characters that are not any of the parentheses in the input.

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  const pairs = new Map();
  pairs.set(')', '(');
  pairs.set(']', '[');
  pairs.set('}', '{');
  const openChars = [...pairs.values()];

  for(let i = 0; i < s.length; i++) {
    const peek = stack[stack.length - 1];
    const curr = s.substr(i,1)

    if (openChars.includes(curr)) {
      stack.push(curr);
    } else if (pairs.get(curr) && pairs.get(curr) === peek) {

        stack.pop();
      else
        return false;
    }
  }

  return stack.length === 0 ? true : false

};
```
