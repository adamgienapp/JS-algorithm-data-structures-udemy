/*
  Given a string, return the length of the longest substring
  with all distinct characters.
*/

function findLongestSubstring(string){
  const track = {};
  let start = 0;
  let end = 0;
  let max = 0;
  while (end < string.length) {
    if (track[string[end]] !== undefined) {
        start = Math.max(start, track[string[end]] + 1);
    }
    track[string[end]] = end;
    max = Math.max(end - start + 1, max);
    end++;
  }
  return max;
}
