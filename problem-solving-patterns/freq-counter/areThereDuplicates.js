/*
  Given a variable number of arguments, return whether or not
  there are any duplicates among the passed in values.
*/

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}