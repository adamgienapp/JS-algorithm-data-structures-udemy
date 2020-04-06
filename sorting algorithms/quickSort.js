function quickSort (array) {
  if (array.length <= 1) return array;
  
}

function pivot (array, start = 0, end = array.length-1) {
  let pivotIndex = start;
  let pivotDist = 0;
  for (var i = start + 1; i <= end; i++) {
    if (array[i] < array[start]) {
      [array[i-pivotDist], array[i]] = [array[i], array[i-pivotDist]];
      pivotIndex++;
    } else {
      pivotDist++;
    }
  }
  [array[pivotIndex], array[start]] = [array[start], array[pivotIndex]];
  return pivotIndex;
}
