import { round } from '../math/round.js';
import { normalizeHexColor } from './normalizeHexColor.js';

export const alpha = (color: string, opacity: number): string => {
  const hexColor = normalizeHexColor(color);

  const normalizedOpacity = round(
    opacity > -1 && opacity < 1 ? opacity * 100 : opacity
  );

  const validOpacity = Math.max(Math.min(normalizedOpacity, 100), 0);

  let hexOpacity = round((255 * validOpacity) / 100).toString(16);
  hexOpacity = hexOpacity.length === 1 ? `0${hexOpacity}` : hexOpacity;

  return `${hexColor}${hexOpacity}`;
};
