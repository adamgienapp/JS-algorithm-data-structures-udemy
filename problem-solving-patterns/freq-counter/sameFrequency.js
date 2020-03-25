/*
  Given two numbers, find out if they have the same number of digits.
*/

function sameFrequency(num1, num2){
  let str1 = num1.toString(), obj1 = {};
  let str2 = num2.toString(), obj2 = {};
  
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
