/*
  Write a function that takes a string
  and returns a new string in reverse.
*/

function reverse(str){
  if (str.length === 1) return str[0];
  return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'