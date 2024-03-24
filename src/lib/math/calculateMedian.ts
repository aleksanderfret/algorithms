export const calculateMedian = (array: number[]): number => {
  const sortedArr = [...array].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArr.length / 2);

  return sortedArr.length % 2
    ? sortedArr[middleIndex]
    : (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
};
