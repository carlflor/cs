# Group Anagrams

[Leet Code](https://leetcode.com/problems/group-anagrams/description/)

### Description
Given an array of strings, group anagrams together.

### Example
```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

### Solution
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {  
  const map = strs.reduce((acc,word) => {

    const key = regularize(word);
    if (acc[key] == undefined) {
      acc[key] = [word];
    } else {
      acc[key] = [...acc[key], word];
    }
    return acc;
  }, {});
  return Object.values(map);
};


var regularize = function(str) {
  return str.toLowerCase().split('').sort().join('').trim();
}
```
