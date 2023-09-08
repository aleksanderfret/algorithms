import { keys } from '../object/keys.js';
import { values } from '../object/values.js';
import { equalSets } from './equalSets.js';

export const uniqueArray = <T>(array?: T[], field?: keyof T & string) => {
  if (!array) {
    return array;
  }

  if (Array.isArray(array[0])) {
    const newArray: T[] = [];

    array.forEach(item => {
      const index = newArray.findIndex(newArrayItem =>
        equalSets(new Set(item as []), new Set(newArrayItem as []))
      );

      if (index === -1) {
        newArray.push(item);
      }
    });

    return newArray;
  }

  if (array[0] instanceof Object && !(array[0] instanceof Function)) {
    if (field) {
      return array.filter(
        (item, index, self) =>
          index === self.findIndex(selfItem => selfItem[field] === item[field])
      );
    }

    const newArray: T[] = [];

    array.forEach(item => {
      const index = newArray.findIndex(newArrayItem => {
        const firstValues = new Set(values(item as {}));
        const secondValues = new Set(values(newArrayItem as {}));

        firstValues.size !== secondValues.size ||
          equalSets(firstValues, secondValues) ||
          equalSets(
            new Set(keys(item as {})),
            new Set(keys(newArrayItem as {}))
          );
      });

      if (index === -1) {
        newArray.push(item);
      }
    });

    return newArray;
  }

  return [...new Set(array)];
};
