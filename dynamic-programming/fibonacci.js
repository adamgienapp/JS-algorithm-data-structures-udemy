function fibRecursive(n) {
  if (n <= 2) return 1;
  return fibRecursive(n-1) + fibRecursive(n-2);
}

// Memoized (working top -> down)
function fibDynamic(n) {
  const fib = [0, 1, 1];

  function fibFinder(n) {
    if (fib[n]) return fib[n];
    else {
      fib.push(fibFinder(n-1) + fibFinder(n-2));
      return (fibFinder(n-1) + fibFinder(n-2));
    }
  }

  return fibFinder(n);
}

// Tabulated (working bottom -> up)
function fibTabulated(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
