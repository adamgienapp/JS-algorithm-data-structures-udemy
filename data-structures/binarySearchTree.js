class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      var parentFound = false;
      var current = this.root;
      while (!parentFound) {
        if (val > current.val) {
          if (current.children[1]) {
            current = current.children[1];
          } else {
            current.children[1] = newNode;
            parentFound = true;
          }
        }
        if (val < current.val) {
          if (current.children[0]) {
            current = current.children[0];
          } else {
            current.children[0] = newNode;
            parentFound = true;
          }
        }
      }
    }
  }
}