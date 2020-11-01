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

	pop() {
		if(!this.head) return undefined;

		let curr = this.head;
		let pre = curr;

		while(curr.next) {
			pre = curr;
			curr = curr.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;
		if(!this.length) {
			this.head = null;
			this.tail = null;
		}
		return curr;
	}
}

let list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.push("fourth");
list.push("fifth");
list.push("sixth");
list.pop();
console.log(list);