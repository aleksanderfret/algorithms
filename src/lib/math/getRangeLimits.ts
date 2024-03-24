import { getRangeSize } from './getRangeSize.js';

export const getRangeLimits = (
  array: number[],
  amountOfRanges: number,
  noFloats?: boolean
) => {
  const rangeSize = getRangeSize(array, amountOfRanges, noFloats);

  const limits: number[] = [];

  for (let i = 1; i < amountOfRanges; i++) {
    limits.push(rangeSize * i);
  }

  return limits;
};
