import { filterOutliers } from './filterOutliers.js';
import { getClosestRoundNumber } from './getClosestRoundNumber.js';

export const getRangeSize = (
  values: number[],
  amountOfRanges: number,
  noFloats?: boolean
) => {
  const [core] = filterOutliers(values);

  const sortedCore = core.sort((a, b) => a - b);
  const totalRange = sortedCore[core.length - 1] - sortedCore[0];
  const rangeSize = totalRange / amountOfRanges;

  return getClosestRoundNumber(rangeSize, noFloats);
};
