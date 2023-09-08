export const fibonacci = (value: number): number =>
  value <= 3 ? value : fibonacci(value - 2) + fibonacci(value - 1);

export const fibonacciLoop = (value: number): number => {
  if (value <= 3) {
    return value;
  }
  const val = [1, 2, 3];
  for (let i = 4; i <= value; i++) {
    val[i - 1] = val[i - 3] + val[i - 2];
  }

  return val[value - 1];
};
