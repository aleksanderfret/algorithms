import { round } from './round.js';

export const randomFromRange = (min: number, max: number) =>
  round(Math.random() * (max - min)) + min;
