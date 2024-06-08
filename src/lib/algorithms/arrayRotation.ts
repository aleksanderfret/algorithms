export const rightRotateArray = <T = unknown>(list: T[], rotations: number) => {
  const count = Math.min(rotations, list.length);

  return [...list.slice(-1 * count), ...list.slice(0, list.length - count)];
};
