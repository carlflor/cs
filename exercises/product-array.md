# Return array of products of element except current element

### Problem

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

### Solution

##### Explanation:

1. Mantain 2 arrays, "left" and "right"
2. At each index, left array will have the product of all the values to the left of a current element
3. At each index, right array will have the product of all the values to the right of a current element
4. Build the product array by multiplying each element

###### left array
- value at index 0 of left is 1

- To build the left array, multiply array[i - 1] with left[i - 1]. Start from index 1 to the end of the array.


###### right array
- value at last index of right is 1

- To build the right array, multiply array[j + 1] with right[j + 1]. Start from 2nd to the last element back to index 0.

##### Code:

``` js
function getProductArray(array) {
  const n = array.length;
  const left = new Array(n)
  const right = new Array(n)
  const product = new Array(n)

  left[0] = 1;
  right[n - 1] = 1;

  // build left
  for(let i = 1; i < n; i++) {
    left[i] = array[i - 1] * left[i - 1];
  }

  for(let j = n - 2; j >= 0; j++ ) {
    right[j] = array[j + 1] * right[j + 1];
  }

  for(let k = 0; k < n; k++) {
    product[k] = left[k] * right[k];
  }

  return product
}
```
