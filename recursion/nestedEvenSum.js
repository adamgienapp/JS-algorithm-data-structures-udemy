/*
  Write a function that accepts an object, and returns the sum
  of all even numbers contained within the object (including nested objects).
*/

function nestedEvenSum(object) {
  let sum = 0;
  
  function evenNumFinder(obj) {
      for (let key in obj) {
          if (obj[key] % 2 === 0) {
              sum += obj[key]
          }
          if (typeof(obj[key]) === 'object') {
              evenNumFinder(obj[key]);
          }
      }
  }
  
  evenNumFinder(object);
  
  return sum;
}
