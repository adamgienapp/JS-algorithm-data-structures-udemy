class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      console.log("There's nothing to remove!");
      return undefined;
    }
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      console.log("There's nothing to remove!");
      return undefined;
    }
    var oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx > this.length - 1) {
      return null;
    }
    var counter = 0;
    var current = this.head;
    while (counter < idx) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(idx, val) {
    var node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) {
      this.unshift(val);
      return true;
    }
    if (idx === this.length) {
      this.push(val);
      return true;
    }
    var newNode = new Node(val);
    var nodeBefore = this.get(idx - 1);
    var nodeAfter = nodeBefore.next;
    nodeBefore.next = newNode;
    newNode.next = nodeAfter;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    var nodeBefore = this.get(idx - 1);
    var removedNode = nodeBefore.next;
    nodeBefore.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    var current = this.head;
    var temp = null;
    while(current) {
      var previous = current;
      current = current.next;
      previous.next = temp;
      temp = previous;
    }
    var tempTail = this.tail;
    this.tail = this.head;
    this.head = tempTail;
    return this;
  }
}
