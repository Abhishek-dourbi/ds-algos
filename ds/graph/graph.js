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
}

const graph = new Graph();
graph.addVertex("first");
graph.addVertex("second");
graph.addEdge("first", "second");
graph.removeVertex("second");

console.log(graph.adjacencyList);