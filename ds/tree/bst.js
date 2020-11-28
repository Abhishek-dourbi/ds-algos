class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let node = new Node(val);

		if(!this.root) {
			this.root = node;
			return this;
		}
		let currRoot = this.root;

		while(true) {
			if(val === currRoot.value) return undefined;
			if(val < currRoot.value) {
				if(!currRoot.left) {
					currRoot.left = node;
					return this;
					
				} 
				currRoot = currRoot.left
			} else {
				if(!currRoot.right) {
					currRoot.right = node;
					return this;
				}
				currRoot = currRoot.right
			}
		}
	}

	find(val) {
		if(!this.root) return undefined;

		let currRoot = this.root;
		let found = false;

		while(currRoot && !found) {
			if(val === currRoot.value) {
				found = true;
			} else if(val < currRoot.value) {
				currRoot = currRoot.left
			} else {
				currRoot = currRoot.right
			}
		}
		if(!found) return undefined;
		return currRoot;
	} 

	contains(val) {
		if(!this.root) return false;

		let currRoot = this.root;

		while(currRoot) {
			if(val === currRoot.value) {
				return true
			} else if(val < currRoot.value) {
				currRoot = currRoot.left
			} else {
				currRoot = currRoot.right
			}
		}
		return false;
	}

	BFS() {
		if(!this.root) return undefined;

		let node = this.root;
		let queue = [];
		let visited = [];

		queue.push(node);

		while(queue.length) {
			node = queue.shift();
			visited.push(node);
			if(node.left) {
				queue.push(node.left);
			}
			if(node.right) {
				queue.push(node.right);
			}
		}
		return visited;
	}
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(20)
console.log(tree.BFS())

// complexities - 

// Insertion - O(log n)
// Searching - O(log n)