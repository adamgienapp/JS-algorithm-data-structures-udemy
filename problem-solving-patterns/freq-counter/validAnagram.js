/*
  Write a function called validAnagram that takes two strings.
  The function should return true if both strings contain the same
  characters.
*/

function validAnagram (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj1 = {}, obj2 = {};
  for (let char of str1) {
    obj1[char] = ++obj1[char] || 1;
  }
  for (let char of str2) {
    obj2[char] = ++obj2[char] || 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
