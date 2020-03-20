/*
  Write a function called countUniqueValues that returns the
  number of unique (non-duplicate) values in an unsorted array.
*/

function countUniqueValues (arr) {
  if (!arr.length) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }
  arr.sort((a, b) => a - b);
  let count = 1;
  let i = 0, j = 1;
  while (i < arr.length - 1) {
    if (arr[j] !== arr[i]) {
      count++;
      i = j;
      j++;
    }
    if (arr[j] === arr[i]) {
      j++;
    }
  }
  return count;
}
