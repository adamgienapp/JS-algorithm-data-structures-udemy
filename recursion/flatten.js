/*
  Write a function that takes an array, and returns a new array with all values flattened.
*/

function flatten(array){
  let output = [];
  
  function pusher(arr) {
      for(let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
              pusher(arr[i]);
          } else {
              output.push(arr[i]);
          }
      }
  }
  
  pusher(array);
  
  return output;
}
