export const round = (number: number, precision = 0): number => {
  const scale = Math.pow(10, Math.round(Math.abs(precision)));

  return Math.round((number + Number.EPSILON) * scale) / scale;
};

export const calculateMedian = (
  values: number[],
  shouldSort = true
): number => {
  const sortedValues = shouldSort ? [...values].sort((a, b) => a - b) : values;
  const middleIndex = Math.floor(sortedValues.length / 2);

  return sortedValues.length % 2
    ? sortedValues[middleIndex]
    : (sortedValues[middleIndex - 1] + sortedValues[middleIndex]) / 2;
};

export const closestRoundInteger = (value: number): number => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  const base = (5 * magnitude) / 10;

  return round(round(value / base) * base);
};

// To split values into a n ranges we need to get ranges' limits:
// 1. Calculate the first and third quartiles and interquartile range (IQR)
// 2. Use IQR the calculate lower and upper limits
// 3. Use limits to filter out the outliers and leave only the core values
// 3. Calculate the total range of the core values
// 7. Calculate the range size and round it to the user-friendly number
// 8. Calculate n ranges' limits
export const getRangeLimits = (values: number[], rangesCount = 5) => {
  const sortedValues = [...values].sort((a, b) => a - b);

  const middleIndex = Math.floor(values.length / 2);

  const firstQuartile = calculateMedian(
    sortedValues.slice(0, middleIndex),
    false
  );

  const thirdQuartile = calculateMedian(
    sortedValues.slice(-(sortedValues.length - middleIndex)),
    false
  );

  const interquartileRange = thirdQuartile - firstQuartile;

  const lowerLimit = firstQuartile - 1.5 * interquartileRange;
  const upperLimit = thirdQuartile + 1.5 * interquartileRange;

  const coreValues = sortedValues.filter(
    value => value >= lowerLimit && value <= upperLimit
  );

  const totalRange = coreValues[coreValues.length - 1] - coreValues[0];

  const rangeSize = closestRoundInteger(totalRange / rangesCount);

  const rangeLimits: number[] = [sortedValues[0]];

  for (let i = 1; i < rangesCount; i++) {
    rangeLimits.push(rangeSize * i);
  }

  rangeLimits.push(sortedValues[sortedValues.length - 1]);

  return { rangeLimits, rangeSize };
};

// const colors = ['red', 'blue', 'green', 'yellow', 'pink'];

// const { rangeSize, rangeLimits } = getRangeLimits(numbers, 5);

// console.log(rangeSize, rangeLimits);

// const a = numbers.map(value => {
//   return { value, color: colors[Math.min(Math.floor(value / 20), 5 - 1)] };
// });
