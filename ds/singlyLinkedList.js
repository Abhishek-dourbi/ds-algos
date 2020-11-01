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

	shift() {
		if(!this.head) return undefined;
		let temp = this.head;
		this.head = temp.next;
		this.length--;
		if(!this.length) {
			this.tail = null;
		}
		return temp;
	}

	unShift(val) {
		let newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if(index < 0 || index >= this.length) return null;
		let curr = this.head;
		let ite = 0;
		while(ite < index) {
			curr = curr.next;
			ite++;
		}
		return curr;
	}

	set(index, value) {
		let node = this.get(index);
		if(node) {
			node.val = value;
			return true;
		}
		return false;
	}

	insert(index, value) {
		if(index < 0 || index > this.length) return false;
		if(!index) return !!this.unShift(value); 
		if(index === this.length) return !!this.push(value);
	
		let node = new Node(value);
		let pre = this.get(index - 1);
		let curr = pre.next;
	
		node.next = curr;
		pre.next = node;
		this.length++;
		return true;
	}
}

let list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.push("fourth");
list.push("fifth");
list.push("sixth");
list.insert(4, "insert");
console.log(list);