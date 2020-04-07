function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let midpt = Math.floor((max+min)/2);
  
  while(arr[midpt] !== target && min < max) {
      if (arr[midpt] < target) {
          min = midpt + 1;
          midpt = Math.floor((max+min)/2);
      }
      if (arr[midpt] > target) {
          max = midpt - 1;
          midpt = Math.floor((max+min)/2);
      }
  }
  return arr[midpt] === target ? midpt : -1;
}
