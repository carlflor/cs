# Revers Linked List

given a head (having next property), reverse the linked list and return the tail as the new head

``` js

function reverseLinkedList(head) {
  // Write your code here.
	
	let prevNode = null;
	let currNode = head;
	
	while(currNode != null) {
		const nextNode = currNode.next;
		currNode.next = prevNode;
		prevNode = currNode;
		currNode = nextNode; 
	}
	
	return prevNode;
}

```