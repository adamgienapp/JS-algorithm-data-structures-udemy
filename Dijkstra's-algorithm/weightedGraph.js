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
    for(let key in this.adjacencyList) {
      if (key === start) {
        distances[key] = 0;
        queue.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
        queue.enqueue(key, Infinity);
      }
      previous[key] = null;
    }
    let vertex;
    while (queue.storage.length) {
      vertex = queue.dequeue().val;
      if (vertex === end) {
        //build path
        const path = [end];
        let x = end;
        while(previous[x]) {
         path.unshift(previous[x]);
         x = previous[x];
        }
        return path;
      }
      if (vertex || distances[vertex] !== Infinity) {
        this.adjacencyList[vertex].forEach((v) => {
          let current = distances[vertex] + v.weight;
          if (current < distances[v.node]) {
            distances[v.node] = current;
            previous[v.node] = vertex;
            queue.enqueue(v.node, current);
          }
        });
      }
    }
  }
}
