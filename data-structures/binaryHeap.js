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
    var index = this.storage.length - 1;
    var validating = true;

    while (index > 0 && validating) {
      var parentIndex = Math.floor((index - 1) / 2);
      if (this.storage[index] > this.storage[parentIndex]) {
        [this.storage[parentIndex], this.storage[index]] = [this.storage[index], this.storage[parentIndex]];
        index = parentIndex;
      } else {
        validating = false;
      }
    }
  }
}