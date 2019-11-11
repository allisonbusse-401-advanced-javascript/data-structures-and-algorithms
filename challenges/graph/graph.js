class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addNode(value) {
    this.AdjList.set(value, []); 
    return this.AdjList.keys().next().value;
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  getNodes() {
    const keys =  this.AdjList.keys();
    const arr = [];
    for(let i = 0; i < this.noOfVertices; i++) {
      arr.push(keys.next().value);
    }
    return arr;

  }

  getNeighbors(node) {

  }
}

module.exports = Graph;

