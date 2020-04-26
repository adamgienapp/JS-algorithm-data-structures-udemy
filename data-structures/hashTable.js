// arrayLen to be prime - better distribution
// for inner loop, # of iterations capped at 100 to cover time of very long key
function hash(key, arrayLen) {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let val = char.charCodeAt(0) - 96;
    total = (total * prime + val) % arrayLen;
  }
  return total;
}

