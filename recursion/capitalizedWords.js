/*
  Given an array of words, return a new array
  containing each word capitalized.
*/

function capitalizeWords (arr) {
  if (arr.length < 1) {
      return [];
  } else {
      let capWord = '';
      for (let char of arr[0]) {
          capWord += char.toUpperCase();
      }
      return [capWord].concat(capitalizeWords(arr.slice(1)));
  }
}
