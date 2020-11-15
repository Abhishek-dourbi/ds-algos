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

	pop() {
		if(!this.head) return undefined;
		let poppedNode = this.tail;
		if(this.length === 1) {
			this.head = null;
			this.tail = null
		} else {
			this.tail = poppedNode.pre;
			this.tail.next = null;
			poppedNode.pre = null;
		}
		this.length--;
		return poppedNode;
	}

	shift() {
		if(!this.head) return undefined;
		let poppedNode = this.head;
		if(this.length === 1) {
			this.head = null;
			this.tail = null
		} else {
			this.head = poppedNode.next;
			this.head.pre = null;
			poppedNode.next = null;
		}
		this.length--;
		return poppedNode;
	}

	unshift(val) {
		let newNode = new Node(val);

		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.head.pre = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return newNode;
	}

	get(index) {
		if(index < 0 || index >= this.length) return null;

		let node = null;
		if(index < this.length / 2) {
			let ite = 0;
			node = this.head;
			while(ite !== index) {
				node = node.next;
				ite++;
			}
		} else {
			let ite = this.length - 1;
			node = this.tail;
			while(ite !== index) {
				node = node.pre;
				ite--;
			}
		}
		return node;
	}

	set(index, val) {
		let foundNode = this.get(index);

		if(foundNode) {
			foundNode.value = val;
			return true;
		}

		return false;
	}

	insert(index, val) {
		if(index < 0 || index > this.length) return false;
		if(index === 0) return !!this.unshift(val);
		if(index === this.length) return !!this.push(val);

		let foundNode = this.get(index);
		let newNode = new Node(val);
		let preNode = foundNode.pre;

		preNode.next = newNode;

		newNode.next = foundNode;
		newNode.pre = preNode;

		foundNode.pre = newNode;

		this.length++;

		return true;
	}

	remove(index) {
		if(index < 0 || index >= this.length) return false;
		if(index === 0) return this.shift();
		if(index === this.length - 1) return this.pop();

		let poppedNode = this.get(index);
		let preNode = poppedNode.pre;
		let nextNode = poppedNode.next;

		preNode.next = nextNode;
		nextNode.pre = preNode;
		poppedNode.next = null;
		poppedNode.pre = null;

		this.length --;

		return poppedNode;
	}
}

let list = new DoublyLinkedList();

list.push("first");
list.push("second");
list.push("third");
list.push("fourth");
list.set(3, 'THIRD')

console.log(list.remove(0));