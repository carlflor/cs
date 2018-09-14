# Sprital Matrix

[Leet Code](https://leetcode.com/problems/spiral-matrix/description/)

### Description
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.


### Example
```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]



Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

### Solution
```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return [];

  const up = 1;
  const left = 0;
  const right = matrix[0].length - 1;
  const down = matrix.length - 1;

  const data = {
    matrix,
    yMid: Math.ceil((matrix.length - 1) / 2),
    xMid: Math.floor((matrix[0].length - 1) / 2)
  }

  return move(data, right, 1, up, right, down, left, 'down', matrix[0]);
};

function move(data, x, y, up, right, down, left, vector, output) {
  if ((up > data.yMid) || (down < data.yMid) || (left > data.xMid) || (right < data.xMid)) {
    return output;
  }

  output.push(data.matrix[y][x]);


  if (vector === 'right') {
    if (x === right && y === up) {
      return move(data, x, y + 1, up + 1, right, down, left, 'down', output);
    } else {
      return move(data, x + 1, y, up, right, down, left, vector, output);
    }
  } else if (vector === 'down') {
    if (x === right && y === down) {
      return move(data, x - 1, y, up, right - 1, down, left, 'left', output);
    } else {
      return move(data, x, y + 1, up, right, down, left, vector, output);
    }
  } else if (vector === 'left') {
    if (x === left && y === down) {
      return move(data, x, y - 1, up, right, down - 1, left, 'up', output);
    } else {
      return move(data, x - 1, y, up, right, down, left, vector, output);
    }
  } else if (vector === 'up') {
    if (x === left && y === up) {
      return move(data, x + 1, y, up, right, down, left + 1, 'right', output);
    } else {
      return move(data, x, y - 1, up, right, down, left, vector, output);
    }
  }
}
```
