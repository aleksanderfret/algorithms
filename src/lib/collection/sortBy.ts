export const sortBy = <T extends Object>(
  items: T[],
  fieldName: keyof T & string,
  order: 'asc' | ' desc'
) =>
  items.sort((a, b) => {
    const aField = String(a[fieldName]);
    const bField = String(b[fieldName]);

    if (aField === bField) {
      return 0;
    }

    return order === 'asc'
      ? aField.localeCompare(bField)
      : bField.localeCompare(aField);
  });
