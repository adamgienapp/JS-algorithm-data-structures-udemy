/* Binary heap storage:
    left child at index (2n + 1)
    right child at index (2n + 2)
    parent located at index Math.floor((n-1)/2)
*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.storage = [];
  }

  enqueue(val, priority = 0) {
    let newNode = new Node(val, priority);
    this.storage.push(newNode);
    let index = this.storage.length - 1;
    let validating = true;

    while (index > 0 && validating) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.storage[index].priority < this.storage[parentIndex].priority) {
        [this.storage[parentIndex], this.storage[index]] = [this.storage[index], this.storage[parentIndex]];
        index = parentIndex;
      } else {
        validating = false;
      }
    }
    
    return this.storage;
  }

  dequeue() {
    if (this.storage.length === 1) {
      return this.storage.pop();
    }

    let next = this.storage[0];
    this.storage[0] = this.storage.pop();
    let index = 0;

    while( 2 * index + 1 < this.storage.length) {
      if (2 * index + 2 >= this.storage.length) {
        if (this.storage[2 * index + 1].priority < this.storage[index].priority) {
          [this.storage[index], this.storage[2 * index + 1]] = [this.storage[2 * index + 1], this.storage[index]];
          index = 2 * index + 1;
        } else {
          break;
        }
      } else {
        let switchIdx = this.storage[2 * index + 1].priority < this.storage[2 * index + 2].priority ? 2 * index + 1 : 2 * index + 2;
        [this.storage[index], this.storage[switchIdx]] = [this.storage[switchIdx], this.storage[index]];
        index = switchIdx;
      }
    }

    return next;
  }
}