export const trimOnSpace = (text?: string, end = 100): string => {
  if (!text) {
    return '';
  }

  if (text.length > end) {
    return `${
      text.replace(/[\r\n\t]/g, '').match(new RegExp(`^.{${end}}\\w*`)) || ''
    }...`;
  }

  return text;
};
