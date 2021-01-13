class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		const newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.values.length - 1;
		let element = this.values[index];

		while(index > 0) {
			let parentNodeIndex = Math.floor((index - 1) / 2);
			let parentNode = this.values[parentNodeIndex];

			if(element.priority < parentNode.priority) {
				this.values[parentNodeIndex] = element;
				this.values[index] = parentNode;
				index = parentNodeIndex;
			} else {
				break;
			}
		}
	}

	dequeue() {
		const rootNode = this.values[0];
		const endNode = this.values.pop();
		this.values[0] = endNode;
		this.sinkDown();
		return rootNode;
	}

	sinkDown() {
		let i = 0;
		let length = this.values.length;
		let element = this.values[0];

		while(true) {
			let leftChildIndex = 2 * i + 1;
			let rightChildIndex = 2 * i + 2;
			let leftChild;
			let rightChild;
			let swap = null;

			if(leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if(leftChild.priority < element.priority) {
					swap = leftChildIndex;
				}
			}

			if(rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if(
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority) 
				) {
					swap = rightChildIndex;
				}
			}

			if(!swap) break;
			this.values[i] = this.values[swap];
			this.values[swap] = element;
			i = swap;
		}
	}
}

const queue = new PriorityQueue();

// queue.enqueue(1, 1);
// queue.enqueue(4, 4);
// queue.enqueue(5, 5);
// queue.enqueue(3, 3);
// queue.enqueue(2, 2);
// queue.enqueue(8, 8);
// queue.enqueue(6, 6);
// queue.enqueue(7, 7);
// queue.enqueue(10, 10);
// queue.enqueue(9, 9);
queue.enqueue('common cold', 5);
queue.enqueue('gunshot wound', 1);
queue.enqueue('high fever', 4);
queue.enqueue('broken arm', 2);
queue.enqueue('glass in foot', 2);

// queue.dequeue();

console.log(queue);