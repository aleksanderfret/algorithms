import { calculateMedian } from './calculateMedian.js';

export const calculateQuartiles = (arr: number[]): [number, number, number] => {
  const sortedArr = [...arr].sort((a, b) => a - b);

  const mid = Math.floor(arr.length / 2);

  const q2 = calculateMedian(sortedArr);
  const q1 = calculateMedian(sortedArr.slice(0, mid));
  const q3 = calculateMedian(sortedArr.slice(-(sortedArr.length - mid)));

  return [q1, q2, q3];
};
