/*
  Given two strings, check whether or not the characters in the first string
  form a subsequence of the characters in the second string.
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  
  while (j < str2.length && i < str1.length) {
      if (str1[i] === str2[j]) {
          i++;
      }
      j++;
  }
  
  if (i === str1.length) {
    return true
  } else {
    return false;
  }
}