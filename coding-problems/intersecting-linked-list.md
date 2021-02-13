# 160. Intersection of Two Linked Lists
https://leetcode.com/problems/intersection-of-two-linked-lists/


``` js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    // get count of each linked list
    let countA = 1;
    let countB = 1;

    let pointerA = headA;
    let pointerB = headB;

    if(!headA || !headB) return null;

    while(pointerA.next != null) {
        countA++;
        pointerA = pointerA.next;
    }

    while(pointerB.next != null) {
        countB++;
        pointerB = pointerB.next;
    }

    // check that both pointers at the end should be equal
    if (pointerA != pointerB) return null;

    // get the difference in length
    let difference = Math.abs(countA - countB);

    // traverse the longer one until the difference
    let pointerL = null;
    let pointerS = null;

    if (countA > countB) {
        console.log('A is longer')
        pointerL = headA;
        pointerS = headB;
    } else {
        console.log('B is longer')
        pointerL = headB;
        pointerS = headA;
    }

    while(difference > 0) {
        difference--;
        pointerL =  pointerL.next;
    }

    console.log('vals', pointerL.val, pointerS.val)

    // traverse in parellel startign at difference for the longer list
    while(pointerL !== pointerS) {
        pointerL = pointerL.next;
        pointerS = pointerS.next;
    }

    return pointerL;

};
```
