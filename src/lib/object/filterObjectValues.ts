import { entries } from './entries.js';

export type FilterValueCallback<T extends Object> = (v: T[keyof T]) => boolean;

export const filterObjectValues = <T extends Object, K = Partial<T>>(
  object: T,
  callback: FilterValueCallback<T>
): K =>
  entries(object).reduce(
    (newObject, [key, value]) =>
      callback(value) ? { ...newObject, [key]: value } : newObject,
    {} as K
  );
