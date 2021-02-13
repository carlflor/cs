# Find Sum in Array
(Daily Coding Problem #1)

### Problem
```
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
```

### Solution

##### Explanantion:

1. Maintain a hash of the differences (key) to complete the sum for each element with index as value
2. Upon checking an element, check hash first if there's a match already
3. If not, get the difference, add it to the hash

##### Code:

``` js

function findSum(array, sum) {
  const hash = {};

  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    const diff = hash["" + el];

    if (diff > -1) {
      return true;
    } else {
      const newDiff = sum - el;
      hash[newDiff] = i;
    }
  }
  return false;
}

```
