# Heap

A heap is a tree that is sorted either from largest value (max heap) or smallest value (min heap) in the head.

#### Array representation of Heap

A heap can be represented as a linked list. It improves its access complexity, but insertion will be quite tasking. A heap represented as an array will make insertion simple but will make access more complex. The trade off for using array is still much better than using linked list.

In a binary heap
  - a node at position K will have children at position 2K and 2K + 1
  - the root is at index 1 (index 0 is null)
  - a complete binary tree (except the last row)
  - filled from right to left


0 1 2 3 4 5 6 7 9 10
- T S R P N O A E I

#### Complexity

using a binary heap:
- insert: O(log(n))
- remove max: O(log(n))

### JS Implementation

``` js
// example Max Heap with integer values
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  // parent and child are indexes accessing heap
  swim(child) {
    let parent = Math.floor(child/2)
    while(child > 1 && this.checkLessThan(parent, child)) {
      this.swap(parent, child);
      child = parent;
      parent = Math.floor(child/2)
    }
  }

  sink(parent) {
    while(2 * parent <= this.heap.length) {
      let child = 2 * parent;

      // choose the child with larger value
      if (child < this.heap.length && this.checkLessThan(child, child+1)) child++;
      // break loop if parent is larger than both children
      if (!this.checkLessThan(parent, child)) break;

      this.swap(parent, child);
      parent = child;
    }
  }

  insert(value) {
    const newIndex = this.heap.length;
    this.heap[newIndex] = value;
    this.swim(newIndex);
  }

  removeMax() {
    const root = 1;
    const max = this.heap[root];
    this.swap(root, this.heap.length - 1);
    this.heap.pop();
    this.sink(root);
    return max;
  }

  // helpers
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  checkLessThan(parent, child) {
    return this.heap[parent] < this.heap[child];
  }

  show() {
    console.log(this.heap);
  }
}
```
