# Merge Two Sorted Lists

[Leet Code](https://leetcode.com/problems/merge-two-sorted-lists/description/)

### Description
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

### Example
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

### Solution
``` js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode(null);
  let current = head;

  while(l1 && l2) {    
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  if (l1) {
      current.next = l1;
  } else if (l2) {
      current.next = l2;
  }

  return head.next;
};
```
