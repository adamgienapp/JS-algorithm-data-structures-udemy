/*
  Given a sorted array of integers and a target value,
  determine if there is a pair of values whose average matches the target.
*/

function averagePair(array, target){
  let small = 0;
  let big = array.length - 1;
  
  while (small < big) {
      let avg = (array[small] + array[big]) / 2;
      if (avg === target) {
          return true;
      } else if (avg < target) {
          small++;
      } else {
          big--;
      }
  }
  return false;
}