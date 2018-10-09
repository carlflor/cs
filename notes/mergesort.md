# Merge Sort

Merge sort is a sorting algorithm that follows divide and conquer method. It divides an array into two parts until there's only one element left, and sorts upon merging.
The algorithm is composed of two parts, first is the division of arrays in to 2. Second is the merging of the 2 groups in a sorted manner

#### Time Complexity
- Best: O(n log(n))
- Average: O(n log(n))
- Worst: O(n log(n))

### Space Complexity
- Worst: O(n)

### Complexity Analysis

Merge sort is fast but would always need double space compared to the number of elements

##### Partially ordered arrays
Depending on the initial order of the input, we may not need O(n log(n)) compares. Insertion sort can be linear time if they elements are almost ordered.

##### Duplicate keys
Depending on the input distribution of duplicate, we may not need O(n log(n)) comapres. We can use 3-way Quicksort

##### Digital properties of keys
We can use digit/character compares instead of key compares for numbers and strings
Use radix sorts

### JS Implementation
``` js
function sort(array, left, right) {
  if (right > left) {
    const center = Math.floor((right + left)/2);

    sort(array, left, center);
    sort(array, center + 1, right);

    merge(array, center, left, right)
  }
}

function merge(array, center, left, right) {
  const arrayL = array.slice(left, center + 1);
  const arrayR = array.slice(center + 1, right + 1);

  let pointerL = 0;
  let pointerR = 0;
  let pointer = left;

  while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
    if(arrayL[pointerL] <= arrayR[pointerR]) {
      array[pointer] = arrayL[pointerL];
      pointerL++;
    } else {
      array[pointer] = arrayR[pointerR];
      pointerR++;
    }
    pointer++;
  }

  while(pointerL < arrayL.length) {
    array[pointer] = arrayL[pointerL];
    pointerL++;
    pointer++;
  }

  while(pointerR < arrayR.length) {
    array[pointer] = arrayR[pointerR];
    pointerR++;
    pointer++;
  }
}
```

[Reference](https://www.geeksforgeeks.org/merge-sort/)
