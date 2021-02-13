# Linked List Cycle 2

[Leet Code](https://leetcode.com/problems/linked-list-cycle-ii/description/)

### Description
Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

- Do not modify the linked list.

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
var detectCycle = function(head) {
  if (head === null) return null;
  if (head === head.next) return head;
  if (head.next !== null && head === head.next.next) return head;

  let slow = head;
  let fast = head;
  let didCollide = false;

  // get the need where they will meet
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      didCollide = true;
      break;
    }
  }

  if (didCollide) {
    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return fast;
  }

  return null;
};
```
