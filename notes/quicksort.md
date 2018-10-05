# Quick Sort

Quick sort is a commonly used in-place sorting algorithm as it is simple to implement and generally one of the fastest sorting algorithms

#### Time Complexity
- Base Case: O(n log(n))
- Wort Case: O(n^2)

#### Space Complexity
- Wort Case: O(log(n))

#### JS Implementation
``` js
function quickSort(left, right, array) {
  if (left >= right) return;

  console.log(array)
  const pivot = array[Math.floor((left + right) / 2)];
  const index = partition(left, right, pivot, array);

  quickSort(left, index - 1, array);
  quickSort(index, right, array);

  return array;
}

function partition(left, right, pivot, array) {
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      console.log('swap:        ', array[i], ' <- ', pivot,' -> ', array[j]);
      swap(i, j, array)
      i++;
      j--;
    }
  }
  console.log('\n');
  return i;
}

function swap(left, right, array) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

let array = [1, 5, 3, 6, 2, 8, 3, 6, 9];
quickSort(0, array.length - 1, array)
```

- [Reference](https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/)
- [Different implementation](https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort)
