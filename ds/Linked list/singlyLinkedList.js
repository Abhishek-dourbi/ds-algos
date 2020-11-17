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

	remove(index) {
		if(index < 0 || index >= this.length) return undefined;
		if(!index) return this.shift();
		if(index === this.length - 1) return this.pop()
		const pre = this.get(index - 1);
		const curr = pre.next;
		
		pre.next = curr.next;
		this.length--;
		return curr;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let pre = null;
		let next;


		while(node) {
			next = node.next;
			node.next = pre;
			pre = node;
			node = next;
		}
		return this;
	}

	print() {
		let arr = [];
		let curr = this.head;

		while(curr) {
			arr.push(curr.val);
			curr = curr.next;
		}
		console.log(arr);
	}
}

let list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.push("fourth");
list.push("fifth");
list.push("sixth");
// list.remove(9);
// console.log(list.remove(4));
// list.reverse();
list.print();
// console.log(list)
// console.log(list.reverse());



complexities - 

Insertion - O(1)
Removal - O(1) or O(n)
Searching - O(n)
Access - O(n)