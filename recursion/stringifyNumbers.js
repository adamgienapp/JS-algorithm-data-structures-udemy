/*
  Write a function that accepts an object and returns a new object
  where all of the values which are numbers and converted to strings.
*/

function stringifyNumbers (obj) {
  let output = {};
  for (let key in obj) {
      if (typeof(obj[key]) === 'object' && !Array.isArray(obj[key])) {
          output[key] = stringifyNumbers(obj[key]);
      } else if (typeof(obj[key]) === 'number') {
          output[key] = obj[key].toString();
      } else {
          output[key] = obj[key]
      }
  }
  return output;
}
