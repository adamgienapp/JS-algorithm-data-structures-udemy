


function getDigit(num, place) {
  let div = num / (10 ** (place + 1));
  return Math.floor((div % 1) * 10);
}