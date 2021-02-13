# Swap Nodes in Pairs

[Leet Code](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

### Description
Given a linked list, swap every two adjacent nodes and return its head.
- Your algorithm should use only constant extra space.
- You may not modify the values in the list's nodes, only nodes itself may be changed.

### Example
```
Given 1->2->3->4, you should return the list as 2->1->4->3.
```

### Solution
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return null;

  const next = head.next;
  if (next) {
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
  } else {
    return head;
  }
};
```
