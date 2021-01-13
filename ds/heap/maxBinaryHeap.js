class MaxBinaryHeap {
	constructor() {
		this.values = []
	}

	insert(val) {
		this.values.push(val);
		this.bubbleUp();
	}

	extractMax() {
		let max = this.values[0];
		let end = this.values.pop();
		if(this.values.length) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max; 
	}

	sinkDown() {
		let i = 0;
		const length = this.values.length;
		let element = this.values[0];

		while(true) {
			let index;
			let leftChildIndex = 2 * i + 1;
			let rightChildIndex = 2 * i + 2;
			let leftChild, rightChild;
			let swap = null; 

			if(leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if(leftChild > element) {
					swap = leftChildIndex;
				}
			}
			if(rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if(
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIndex;
				}
			}

			if(swap) {
				let temp = this.values[i];
				this.values[i] = this.values[swap];
				this.values[swap] = temp ;
				i = swap;
				element = this.values[swap]
			} else {
				break;
			}
		}
	}

	bubbleUp() {
		let index = this.values.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);

		while(this.values[parentIndex] < this.values[index] && index > 0) {
			let temp = this.values[parentIndex];
			this.values[parentIndex] = this.values[index];
			this.values[index] = temp;

			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}
}

let obj = new MaxBinaryHeap;
obj.insert(41);
obj.insert(39);
obj.insert(33);
obj.insert(18);
obj.insert(27);
obj.insert(12);
obj.insert(55);
obj.extractMax();

console.log(obj.values);

// complexities - 

// Insertion - O(log n)
// Removal - O(log n)
// Searching - O(n)

// useful for sorting and creating priority queues
// No unbalanced structures
// represent using arrays without pointers