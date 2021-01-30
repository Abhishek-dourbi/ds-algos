class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if(!this.adjacencyList.vertex) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(v1, v2) {
		if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1); 
	}

	removeEdge(v1, v2) {
		if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
	}	

	removeVertex(vertex) {
		if(!this.adjacencyList[vertex]) return undefined;
		for(let i = 0; i < this.adjacencyList[vertex].length; i++) {
			this.removeEdge(vertex, this.adjacencyList[vertex][i]);
		}
		delete this.adjacencyList[vertex];
	}

	DFSRecursive(startingVertex) {
		if(!startingVertex || !this.adjacencyList[startingVertex]) return null;
		let visited = {};
		let result = [];
		let adjacencyList = this.adjacencyList;

		function helper(vertex) {
			if(!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);

			for(let i = 0; i < adjacencyList[vertex].length; i++) {
				if(!visited[adjacencyList[vertex][i]]) {
					helper(adjacencyList[vertex][i]);
				}
			}
		}

		helper(startingVertex);
		return result;
	}

	DFSIterative(startingNode) {
		let arr = [];
		let visited = {};
		let result = [];
		let vertex;

		arr.push(startingNode);
		visited[startingNode] = true;

		while(arr.length) {
			vertex = arr.pop();
			result.push(vertex);
			for(let i = 0; i < this.adjacencyList[vertex].length; i++) {
				if(!visited[this.adjacencyList[vertex][i]]) {
					visited[this.adjacencyList[vertex][i]] = true;
					arr.push(this.adjacencyList[vertex][i]);
				}
			}
		}

		return result;
	}
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.DFSIterative ("A"));