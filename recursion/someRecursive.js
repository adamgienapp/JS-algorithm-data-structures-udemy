/*
  Write a function that takes an array and a callback function, which
  returns true if a single value in the array cause the callback to return true.
  Otherwise, return false.
*/

function someRecursive(array, cb){
  if (array.length < 1) {
      return false;
  } else {
      if (cb(array[0])) {
          return true;
      } else {
          return someRecursive(array.slice(1), cb);
      }
  }
}
