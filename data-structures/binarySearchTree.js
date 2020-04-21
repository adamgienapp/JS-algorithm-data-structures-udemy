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
        if (val === current.val) return undefined;
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
    return this;
  }

  find(val) {
    var valFound = false;
    var current = this.root;
    while (!valFound) {
      if (current.val === val) {
        valFound = true;
      }
      if (val > current.val) {
        if (current.children[1]) {
          current = current.children[1];
        } else {
          break;
        }
      }
      if (val < current.val) {
        if (current.children[0]) {
          current = current.children[0];
        } else {
          break;
        }
      }
    }
    return valFound;
  }

  breadthFirstSearch() {
    var visited = [];
    var queue = [this.root];
    
    while (queue.length) {
      queue[0].children.forEach( item => {
        if (item) {
          queue.push(item);
        }
      });
      visited.push(queue[0].val);
      queue.shift();
    }

    return visited;
  }

  depthFirstPreOrder() {
    var visited = [];
    var queue = [this.root];
    var node;
    
    while (queue.length) {
      var nodeChildren = []
      node = queue.shift();
      node.children.forEach( item => {
        if (item) {
          nodeChildren.push(item);
        }
      });
      visited.push(node.val);
      queue = nodeChildren.concat(queue);
    }

    return visited;
  }
}
