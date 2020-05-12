import PriorityQueue from './priorityQueue';

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v2].push({node: v1, weight});
  }

  Dijkstra(start, end) {
    //initialize objects
    const distances = {};
    const queue = new PriorityQueue();
    const previous = {};
    for(var key in this.adjacencyList) {
      if (key === start) {
        distances[key] = 0;
        queue.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
        queue.enqueue(key, Infinity);
      }
      previous[key] = null;
    }
    
//     while (queue.storage.length) {
//       let vertex = queue.dequeue().val;
//       if (vertex === end) {
//         return;
//       }
//       this.adjacencyList[vertex].forEach((v) => v)
//     }
  }
}