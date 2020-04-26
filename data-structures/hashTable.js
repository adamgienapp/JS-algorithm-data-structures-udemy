function hash(key, arrayLen) {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(ley.length, 100); i++) {
    let char = key[i];
    let val = char.charCodeAt(0) - 96;
    total = (total * prime + val) % arrayLen;
  }
  return total;
}