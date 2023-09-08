export const olderThan = (date: number | Date, hours = 24) => {
  const then = typeof date === 'number' ? date : date.getTime();
  const now = new Date().getTime();

  const diff = Math.abs(now - then) / (60 * 60 * 1000);

  return diff > hours;
};
