class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }
    return ++this.size;
  }

  pop() {
    var popped = this.last;
    if (this.size < 1) {
      return popped;
    }
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.last = this.last.next;
      popped.next = null;
    }
    this.size--;
    return popped.val;
  }
}