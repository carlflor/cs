# Longest Valid Parentheses

[Leet Code](https://leetcode.com/problems/longest-valid-parentheses/description/)

### Description
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

### Example
```
Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
```

### Solution

I store the indexes in a stack. If the top of the stack is valid with the current character, then I pop the stack.
At the end, I will have a stack of the indexes that are invalid. In between these indexes are the valid parentheses. The largest difference will be the longest valid length.
``` js
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (s.length < 1) return 0;
  const stack = [0];

  // collect all characters and put them in the stack
  for(let i = 1; i < s.length; i++) {
    const topIndex = stack[stack.length - 1];
    const top = s[topIndex];

    if (top === '(' && s[i] === ')') {
      stack.pop();
    } else {
      stack.push(i);
    }
  }

  if (stack.length === 0) return s.length

  let body = 0;
  let head = stack[0] - 0;
  let tail = s.length - 1 - stack[stack.length - 1];
  let currIndex = stack.pop();
  while(stack.length > 0) {
    const top = stack[stack.length - 1];
    const difference = (currIndex - top) - 1;

    body = Math.max(difference, body);
    currIndex = stack.pop();
  }

  return Math.max(head, body, tail);
};
```
