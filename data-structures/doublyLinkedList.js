class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length < 1) {
      console.log("There's nothing to remove!");
      return undefined;
    }
    var oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length < 1) {
      console.log("There's nothing to remove!");
      return undefined;
    }
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length < 1) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    var current;
    if (idx < this.length / 2) {
      let counter = 0;
      current = this.head;
      while (counter < idx) {
        current = current.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      current = this.tail;
      while (counter > idx) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(idx, val) {
    var node = this.get(idx);
    if (node !== undefined) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    var current = this.get(idx);
    if (!current) {
      console.log('Invalid index!');
      return undefined;
    }
    var newNode = new Node(val);
    newNode.prev = current.prev;
    newNode.next = current;
    newNode.prev.next = newNode;
    current.prev = newNode;
    this.length++;
    return this;
  }

  remove(idx) {
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    
    var current = this.get(idx);
    if (!current) {
      console.log('Invalid index!');
      return undefined;
    }

    var beforeNode = current.prev, afterNode = current.next;
    beforeNode.next = afterNode, afterNode.prev = beforeNode;
    current.prev = null, current.next = null;
    this.length--;
    return current;
  }
}
