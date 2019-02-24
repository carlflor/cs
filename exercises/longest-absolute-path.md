# 388. Longest Absolute File Path
Leetcode: https://leetcode.com/problems/longest-absolute-file-path/

``` js
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    const array = input.split("\n");

    if (array.length === 0) return 0;
    if (array.length === 1) {
        const path = array[0];
        if (isFile(path)) return path.length;
        return 0
    }

    const levels = [array[0].length]
    let maxLength = 0;

    for(let i = 1; i < array.length; i++) {
        const path = array[i];
        const currTab = tabCount(path)


        // -currTab to remove tabs
        // +1 to add slash character
        const currLength = levels[currTab - 1] + path.length - currTab + 1
        console.log(path, currTab, currLength)

        if (isFile(array[i])) {
            maxLength = Math.max(maxLength, currLength);
        } else {
            levels[currTab] = currLength;
        }
    }

    return maxLength;
};

// only works with tabs not spaces!
function tabCount(path) {
    const tabc = (path.match(/\t/g) || []).length;
    return tabc;
}

function isFile(path) {
    const dot = (path.match(/\./g) || []).length;
    return dot >= 1;
}
```
