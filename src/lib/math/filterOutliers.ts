import { calculateQuartiles } from './calculateQuartiles.js';

export const filterOutliers = (values: number[]): number[][] => {
  const [q1, , q3] = calculateQuartiles(values);

  const iqr = q3 - q1;

  const lowLimit = q1 - 1.5 * iqr;
  const upLimit = q3 + 1.5 * iqr;

  const outliers: number[] = [];
  const core: number[] = [];

  values.forEach(num => {
    if (num < lowLimit || num > upLimit) {
      outliers.push(num);
    } else {
      core.push(num);
    }
  });

  return [core, outliers];
};
