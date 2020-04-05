function mergeSort (array) {
  if (array.length <= 1) return array;
  let midpt = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midpt));
  let right = mergeSort(array.slice(midpt));
  return merge(left, right);
}


function merge (arr1, arr2) {
  let output = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    let arr1Min = arr1[i] < arr2[j];
    if (arr1Min) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }

  if (i === arr1.length) {
    output = output.concat(arr2.slice(j));
  } else {
    output = output.concat(arr1.slice(i));
  }

  return output;
}