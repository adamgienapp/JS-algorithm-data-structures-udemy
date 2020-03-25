/*
  Write a function that accepts an object and returns
  and array containing all of the values that are strings.
*/

function collectStrings(obj) {
  let output = [];
  for (let key in obj) {
      if (typeof(obj[key]) === 'object' && !Array.isArray(obj[key])) {
          output = output.concat(collectStrings(obj[key]));
      } else if (typeof(obj[key]) === 'string') {
          output.push(obj[key]);
      }
  }
  return output;
}
