function radixSort (array, digit = 0) {
  const buckets = [[],[],[],[],[],[],[],[],[]];

  for (let num of array) {
    let idx = getDigit(num, digit);
    buckets[idx].push(num);
  }
  if (buckets[0].length === array.length) {
    return buckets[0];
  } else {
    let newArray = [];
    for (let i in buckets) {
      newArray = newArray.concat(buckets[i]);
    }
    return radixSort(newArray, digit + 1);
  }
}

function getDigit(num, place) {
  let div = Math.abs(num) / (10 ** place);
  return Math.floor(div % 10);
}
