/*
  Write a function that accepts an array of strings,
  and capitalizes the first letter in each entry of the array.
*/

function capitalizeFirst (array) {
  if (array.length < 1) {
      return [];
  } else {
      let newWord = array[0][0].toUpperCase() + array[0].slice(1);
      return [newWord].concat(capitalizeFirst(array.slice(1)));
  }
  
}
