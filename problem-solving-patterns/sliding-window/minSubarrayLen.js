/*
  Given an array of positive integers and a positive integer target,
  return the minimal length of a contiguous subarray of which the sum
  is greater than or equal to the target number.
*/

function minSubArrayLen(array, target) {
  let min = Infinity;
  let start = 0;
  let end = 1;
  let curr = array[0];
  while(start < array.length) {
      if (curr < target && end < array.length) {
          curr += array[end];
          end++;
      } else if (curr >= target) {
          min = Math.min(min, end - start);
          curr -= array[start];
          start++;
      } else {
          break;
      }
  }
  return min === Infinity ? 0 : min;
}
