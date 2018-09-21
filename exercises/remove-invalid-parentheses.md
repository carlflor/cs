# Remove Invalid Parentheses

[Leet Code](https://leetcode.com/problems/remove-invalid-parentheses/description/)

### Description
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

- The input string may contain letters other than the parentheses ( and ).

### Solution

This is my BFS solution

``` js
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let set = new Set([s])

  while(set.size > 0) {
    const nextLevel = new Set()
    for(let string of set) {
      if(validateString(string)) {
        return [...set].filter(validateString)
      }

      for(let i = 0; i < string.length; i++) {
        const char = string.slice(i,i+1)
        if(char == ')' || char == '(')
          nextLevel.add(string.slice(0,i) + string.slice(i+1));
      }
    }

    set = nextLevel;
  }

  return [""]
};

function validateString(s) {
  let isBalanced = 0;
  array = s.split("");

  for(let i = 0; i < array.length; i++) {
     if (array[i] === '(') isBalanced++;
    else if  (array[i] === ')') isBalanced--;

    if (isBalanced < 0)
      return false;
  }

  return isBalanced === 0 ? true : false;
}


```

### Optimal Solution

``` js
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let rLeft = 0, rRight = 0;
    const response = [];
    const arr = s.split('');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '(') {
            rLeft++;
            continue;
        }
        if(arr[i] === ')') {
            if (rLeft > 0) {
                rLeft --
            } else {
                rRight++;
            }
        }
    }

    formString(arr, rLeft, rRight, 0, 0, '', response);
    return response;
};

const formString = (arr, rLeft, rRight, open, i, modifiedString, response, lastSkipped = '') => {
    if (rLeft < 0 || rRight < 0 || open < 0) return;
    if(i === arr.length) {
        if(rLeft === 0 && rRight === 0 && open === 0) {
        response.push(modifiedString);
        }
        return;
    }
    const char = arr[i];
    let nString = "";

    if(char === '(') {
        nString = modifiedString + '(';
        if(rLeft > 0) {
            formString(arr, rLeft - 1, rRight, open, i + 1, modifiedString, response, '(');
        }
        if(lastSkipped !== '(') {
        formString(arr, rLeft, rRight, open + 1, i + 1, nString, response);
        }
    } else if(char === ')') {
        nString = modifiedString + ')';
        if(rRight > 0) {
            formString(arr, rLeft, rRight - 1, open, i + 1, modifiedString, response, ')');
        }
        if(open > 0 &&  lastSkipped !== ')') {
            formString(arr, rLeft, rRight, open - 1, i + 1, nString, response);
        }
    }
    else {
        nString = modifiedString + char;
        formString(arr, rLeft, rRight, open, i + 1, nString, response);
    }
}
```
