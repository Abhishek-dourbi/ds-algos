class MaxBinaryHeap {
	constructor() {
		this.values = []
	}

	insert(val) {
		this.values.push(val);
		this.bubbleUp();
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

console.log(obj.values);