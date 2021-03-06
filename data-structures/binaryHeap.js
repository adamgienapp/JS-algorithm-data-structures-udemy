/* Binary heap storage:
    left child at index (2n + 1)
    right child at index (2n + 2)
    parent located at index Math.floor((n-1)/2)
*/

// Max binary heap - parent > children
class MaxBinaryHeap {
  constructor() {
    this.storage = [];
  }

  insert(val) {
    this.storage.push(val);
    let index = this.storage.length - 1;
    let validating = true;

    while (index > 0 && validating) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.storage[index] > this.storage[parentIndex]) {
        [this.storage[parentIndex], this.storage[index]] = [this.storage[index], this.storage[parentIndex]];
        index = parentIndex;
      } else {
        validating = false;
      }
    }
    
    return this.storage;
  }

  extractMax() {
    if (this.storage.length === 1) {
      return this.storage.pop();
    }

    let max = this.storage[0];
    this.storage[0] = this.storage.pop();
    let index = 0;

    while( 2 * index + 1 < this.storage.length) {
      if (2 * index + 2 >= this.storage.length) {
        if (this.storage[2 * index + 1] > this.storage[index]) {
          [this.storage[index], this.storage[2 * index + 1]] = [this.storage[2 * index + 1], this.storage[index]];
          index = 2 * index + 1;
        } else {
          break;
        }
      } else {
        let switchIdx = this.storage[2 * index + 1] > this.storage[2 * index + 2] ? 2 * index + 1 : 2 * index + 2;
        [this.storage[index], this.storage[switchIdx]] = [this.storage[switchIdx], this.storage[index]];
        index = switchIdx;
      }
    }

    return max;
  }
}