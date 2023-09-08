export const binarySearch = (list: string[], item: string) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.round((start + end) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
};
