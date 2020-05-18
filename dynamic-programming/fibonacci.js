function fibRecursive(n) {
  if (n <= 2) return 1;
  return fibRecursive(n-1) + fibRecursive(n-2);
}


function fibDynamic(n) {
  const fib = [1, 1];

  function fibFinder(n) {
    if (fib[n]) return fib[n];
    else {
      fib.push(fibFinder(n-1) + fibFinder(n-2));
      return (fibFinder(n-1) + fibFinder(n-2));
    }
  }

  return fibFinder(n);
}