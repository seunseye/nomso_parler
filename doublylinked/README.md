Doubly Linked List Exercise
For this exercise you must get the tests to pass.

Part I
Given the following constructor functions:

function Node(val){
    this.val = val;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}
Implement the following on the DoublyLinkedList.prototype

push
This function should add a node to the end of the DoublyLinkedList. It should return the new the list so that the method can be chained.

pop
This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.

unshift
This function should add a node to the beginning of the DoublyLinkedList. It should return the list so that the method can be chained.

shift
This function should remove a node at the beginning of the DoublyLinkedList. It should return the node removed.

set
This function should find a node and replace its val or return undefined if the node is not found.

_get
This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.

_insert
This internal/helper function should insert a node at a specified index in a DoublyLinkedList. It should return the new length of the DoublyLinkedList.

remove
This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node.

reverse
This function should reverse all of the nodes in a DoublyLinkedList. It should return the reversed DoublyLinkedList.

Part II
Complete the following codewars problems

Linked Lists - Push & BuildOneTwoThree
Linked Lists - Get Nth Node
Linked Lists - Length & Count
Linked Lists - Sorted Insert
Doubly Linked Lists - Remove