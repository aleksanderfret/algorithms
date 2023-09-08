export const isInteger = (value: any): boolean => {
  if (typeof value !== 'string' || value === '') {
    return false;
  }

  const parserValue = Number(value);

  if (typeof parserValue !== 'number') {
    return false;
  }

  return Number.isInteger(parserValue);
};
