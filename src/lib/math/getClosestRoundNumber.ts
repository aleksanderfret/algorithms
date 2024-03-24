import { round } from './round.js';

export const getClosestRoundNumber = (
  value: number,
  noFloats = true
): number => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  const base = (5 * magnitude) / 10;

  return noFloats
    ? round(round(value / base) * base)
    : round(value / base) * base;
};
