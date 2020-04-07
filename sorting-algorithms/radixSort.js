function radixSort (array) {
  
  let maxDigits = maxDigitCount(array[0]);
  for (let i = 1; i < array.length; i++) {
    maxDigits = Math.max(maxDigits, maxDigitCount(array[i]));
  }

  for (let j = 0; j < maxDigits; j++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let num of array) {
      let idx = getDigit(num, j);
      buckets[idx].push(num);
    }
    array = [].concat(...buckets);
  }

  return array;
}

function getDigit(num, place) {
  let div = Math.abs(num) / (10 ** place);
  return Math.floor(div % 10);
}

function maxDigitCount(num) {
  if (num === 0) return 1;
  else return Math.floor(Math.log10(Math.abs(num)) + 1);
}
