# Set Matrix Zeroes

[Leet Code](https://leetcode.com/problems/set-matrix-zeroes/description/)

### Description
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

- A straight forward solution using O(mn) space is probably a bad idea.
- A simple improvement uses O(m + n) space, but still not the best solution.
- Could you devise a constant space solution?

### Example
```
Example 1
Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

Example 2
Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

### Solution
```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let rowHasZero = 0;
  let columnHasZero = 0;

  // check first column for zeros
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      columnHasZero = true;
      break;
    }
  }

  // check first row for zeros
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      rowHasZero = true;
      break;
    }
  }

  // check zero for the rest of the matrix
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // nullify columns based on first row
  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      nullifyColumn(i, matrix);
    }
  }

  // nullify rows based on first column
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      nullifyRow(i, matrix)
    }
  }

  // nullify first column if has 0
  if (columnHasZero)
    nullifyColumn(0, matrix)

  // nullify first row if has 0
  if (rowHasZero)
    nullifyRow(0, matrix)
};

function nullifyColumn(y, matrix) {
  for(let i = 0; i < matrix.length; i++)
    matrix[i][y] = 0;
}

function nullifyRow(x, matrix) {
  for(let i = 0; i < matrix[0].length; i++)
    matrix[x][i] = 0;
}
```
