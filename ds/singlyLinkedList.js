class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;	
	}

	push(val) {
		let newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
		}
		this.tail = newNode;
		this.length++;
		return this
	}
}

let list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
console.log(list)