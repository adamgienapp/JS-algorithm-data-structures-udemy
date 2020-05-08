// Un-directed graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return 'Vertex created';
    } else {
      return 'Vertex already exists';
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
      return 'Edge created';
    } else {
      return 'Error creating edge - specified one or more invalid vertex'
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      let v1_idx = this.adjacencyList[v1].indexOf(v2);
      let v2_idx = this.adjacencyList[v2].indexOf(v1);
      if (v1_idx === -1 || v2_idx === -1) {
        return 'No edge to remove';
      } else {
        this.adjacencyList[v1].splice(v1_idx, 1);
        this.adjacencyList[v2].splice(v2_idx, 1);
        return 'Edge removed';
      }

    } else {
      return 'Error removing edge - specified one or more invalid vertex';
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return 'Invalid vertex';
    }
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return 'Vertex removed';
  }

  depthFirstRecursive(vertex) {
    const visited = {};
    let list = [];

    function DFS(v) {
      if (!v) return;
      
      visited[v] = true;
      list.push(v);

      if (this.adjacencyList[v].length) {
        this.adjacencyList[v].forEach((edge) => {
          if (!visited[edge]) {
            DFS(edge);
          }
        });
      }
    }
    DFS = DFS.bind(this);
    DFS(vertex);
    return list;
  }
}
