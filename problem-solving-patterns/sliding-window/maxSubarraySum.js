/*
  Create a function called maxSubarraySum that takes an array and a length (integer).
  The function returns the largest sum found in a subarray of the given length.
*/

function maxSubarraySum(array, int){
  if (int > array.length) {
      return null;
  }
  let max = array.slice(0, int).reduce((a, b) => a + b);
  let temp = max;
  for (let i = 1; i <= array.length - int; i++) {
      temp += array[i + int - 1] - array[i - 1];
      max = Math.max(max, temp);
  }
  return max;
}
