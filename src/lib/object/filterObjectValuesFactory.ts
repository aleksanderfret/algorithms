import {
  filterObjectValues,
  FilterValueCallback,
} from './filterObjectValues.js';

export const filterObjectValuesFactory =
  <T extends Object, K = Partial<T>>(callback: FilterValueCallback<T>) =>
  (object: T): K =>
    filterObjectValues(object, callback);
