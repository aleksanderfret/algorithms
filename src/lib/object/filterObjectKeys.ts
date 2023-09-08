import { entries } from './entries.js';

export type FilterKeyCallback<T extends Object> = (v: keyof T) => boolean;

export const filterObjectKeys = <T extends Object, K = Partial<T>>(
  object: T,
  callback: FilterKeyCallback<T>
): K =>
  entries(object).reduce(
    (newObject, [key, value]) =>
      callback(key) ? { ...newObject, [key]: value } : newObject,
    {} as K
  );
