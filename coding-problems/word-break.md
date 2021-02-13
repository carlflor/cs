# Word Break

[Leet Code](https://leetcode.com/problems/word-break/description/)

### Description
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.

### Example
```
"leetcode"
["leet", "code"]
```

### Solution
```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let results = [1];

  for (let i=1; i < s.length+1; i++) {
    let flag=0;
    for(let j=0; j < i; j++) {
      if(results[j] && wordDict.includes(s.slice(j,i))) {
        flag=1;
        break;
      }
    }
    results.push(flag)
  }

  return results[results.length -1] == 1;
};
```
