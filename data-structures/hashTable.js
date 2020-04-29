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
          return tuple;
        }
      }
    }
    return undefined;
  }
}
