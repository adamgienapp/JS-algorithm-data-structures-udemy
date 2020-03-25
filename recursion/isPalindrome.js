/*
  Write a function that takes a string and returns true if it's a palindrome,
  false if it's not.
*/

function isPalindrome(str){
  if (str.length <= 1) {
      return true;
  } else {
      if (str[0] !== str[str.length - 1]) {
          return false
      } else {
          return isPalindrome(str.slice(1, -1));
      }
  }
}
