class WeightedGraph {
	constructor() {
		adjacencyList = {}
	}

	addVertex(vertex) {
		if(!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = []
		}
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({
			node: vertex2,
			weight
		})

		this.adjacencyList[vertex2].push({
			node: vertex1,
			weight
		})
	}
}

let g = new WeightedGraph();