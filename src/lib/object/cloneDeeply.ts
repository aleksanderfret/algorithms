import { entries } from './entries.js';

export const cloneDeeply = <T>(item: T): T => {
  if (item === null || item === undefined) {
    return item;
  }

  if (item instanceof Date) {
    return new Date(item.getTime()) as any;
  }

  if (Array.isArray(item)) {
    return item.map((element: any) => cloneDeeply<any>(element)) as any;
  }

  if (item instanceof Object && !(item instanceof Function)) {
    return entries(item).reduce((acc, [key, value]) => {
      acc[key] = cloneDeeply<any>(value);

      return acc;
    }, {} as any);
  }

  return item;
};
