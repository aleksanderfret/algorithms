export const hexToRgb = (
  hex: string,
  alpha: number
): [number, number, number, number] => {
  const int = parseInt(hex, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;

  return [r, g, b, Math.round(alpha * 255)];
};
