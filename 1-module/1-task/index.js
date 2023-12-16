function factorial(n) {
  let result;

  if (n > 1) {
    result = n * (n - 1);
    for (let i = n - 2; i > 0; i--) {
      result = result * i;
    }
  } else {
    result = 1;
  }

  return result;
}
