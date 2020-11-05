class Node {
	constructor(val) {
		this.value = val;
		this.pre = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		let node = new Node(val);
		if(!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.pre = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}
}

let list = new DoublyLinkedList();

list.push("first");
list.push("second");
list.push("third");

console.log(list);