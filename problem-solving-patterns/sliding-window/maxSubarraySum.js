/*
  Create a function called maxSubarraySum that takes an array and a length (integer).
  The function returns the largest sum found in a subarray of the given length.
*/

function maxSubarraySum (array, length) {
  if (length > array.length) {
    return null;
  }
  
  let maxSum = array.slice(0, length).reduce((a, b) => a + b);
  let currSum = maxSum;
  debugger;
  for (let i = 1; i < array.length - length; i++) {
    currSum = currSum - array[i - 1] + array[i + length];
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}
