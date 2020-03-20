/*
  Write a function called same, which accepts two arrays.
  The function should return true if every value in the first array
  has its corresponding value squared in the second array.
  The frequency of values must be the same.
*/

var same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const obj1 = {}, obj2 = {};
  for (const val1 of arr1) {
    obj1[val1] = ++obj1[val1] || 1;
  }
  for (const val2 of arr2) {
    obj2[val2] = ++obj2[val2] || 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key * key]) {
      return false;
    }
  }
  return true;
}