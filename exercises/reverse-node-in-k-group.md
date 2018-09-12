# Reverse Nodes in k-Group

[Leet Code](https://leetcode.com/problems/reverse-nodes-in-k-group/description/)

### Description
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

- Only constant extra memory is allowed.
- You may not alter the values in the list's nodes, only nodes itself may be changed.

### Example
```
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) return null;
  if (k == 1) return head;

  let pointers = {
    head: head,
    next: null
  }
  const tail = subReverse(head, k, pointers);

  if (pointers.next)
    tail.next = reverseKGroup(pointers.next, k)

  return pointers.head;
};

function subReverse(curr, k, pointers) {
  if (k === 1) {
    pointers.head = curr;
    pointers.next = curr.next;
    return curr;
  } else if (curr.next == null) {
    return null;
  }

  const next = subReverse(curr.next, k-1, pointers)

  if (next) {
    curr.next = null;
    next.next = curr;
    return curr;
  } else {
    return null
  }
}
```
