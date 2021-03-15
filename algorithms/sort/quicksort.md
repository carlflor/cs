# Quick Sort

Quick sort is a commonly used in-place sorting algorithm as it is simple to implement and generally one of the fastest sorting algorithms

#### Time Complexity

to find the partition we have to go through the subarray so it will be n

- Best Case: O(n log(n)) 
  assuming the partition always divide the array in the middle, the call stack to call til subset is of length 1 is logn
  get the pivot from the center to lessen the chances of sorting an already sorted list
- Wort Case: O(n^2)
  assuming the partition will be moved to the end of the subset, we run the algo n times and per stack we run n again
  if the list is sorted already and we get the pivot from the start, it will get worst case 

#### Space Complexity

as quick sort is a recursive function, it uses space on the call-stack. Because of this, we can measure the space complexity based on the stack height
but if we run the quick sort on the shorter subarray first, there will be less items in the call-stack at a time

- Worst Case: O(log(n)) - when calling quick sort on the shorter subset first
- Worst Case: O(n) - normal solution where we recursively call left and right recurrion

#### JS Implementation
``` js
function quickSort(left, right, array) {
  if (left >= right) return;

  const index = partition(left, right, array);

  // we try to call quick sort on the shorter subset first
	if (index - 1 - left <= right - index) {
  	quickSort(left, index - 1, array);
  	quickSort(index, right, array);
	} else {
		quickSort(index, right, array);
		quickSort(left, index - 1, array);
	}

  return array;
}

function partition(left, right, array) {
  // we try to get from the middle to balance out the call-stack tree height
  const pivot = array[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(left, right, array)
      left++;
      right--;
    }
  }

  return left;
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
