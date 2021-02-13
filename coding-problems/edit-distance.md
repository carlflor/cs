# Edit Distance
https://leetcode.com/problems/edit-distance/

Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character

Example

```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

### Code

concept: compare each character (from left of right),

if the characters are the same, check the distance of the remaining characters
if the characters are different, check for the minimum of the 3 operations and add 1

``` js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  return editDistance(word1, word2, word1.length, word2.length)

};

function editDistance(word1, word2, m, n) {

  const memo = new Array(m+1).fill().map(()=>Array(n+1).fill())

  for(let i = 0; i <= m; i++) {
    for(let j = 0; j <= n; j++) {

      if (i === 0) {
        memo[i][j] = j;
      }

      else if (j === 0) {
        memo[i][j] = i;
      }

      else if (word1[i - 1] === word2[j - 1]) {
        memo[i][j] = memo[i-1][j-1];
      }

      else {
        memo[i][j] = 1 + Math.min(
          memo[i][j - 1],
          memo[i - 1][j],
          memo[i - 1][j - 1]
        )
      }
    }
  }

  return memo[m][n]
}
```

Time and space complexity is O(MN)
