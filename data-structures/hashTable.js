class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    // # of iterations capped at 100 to cover time of very long key
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * prime + val) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1] = val;
          return;
        }
      }
      this.keyMap[index].push([key, val]);
    } else {
      this.keyMap[index] = [ [key, val] ];
    }
  }

  get(key) {
    let index = this._hash(key);
    let bucket = this.keyMap[index];
    if (bucket) {
      for(let tuple of bucket) {
        if (tuple[0] === key) {
          return tuple[1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let tuple of this.keyMap[i]) {
          keys.push(tuple[0]);
        }
      }
    }
    return keys;
  }

  values() {
    let values = {};
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let tuple of this.keyMap[i]) {
          if (!values[tuple[1]]) {
            values[tuple[1]] = 1;
          }
        }
      }
    }
    return Object.keys(values);
  }
}
