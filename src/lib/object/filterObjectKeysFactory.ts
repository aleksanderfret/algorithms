import { FilterKeyCallback, filterObjectKeys } from './filterObjectKeys.js';

export const filterObjectKeysFactory =
  <T extends Object, K = Partial<T>>(callback: FilterKeyCallback<T>) =>
  (object: T): K =>
    filterObjectKeys(object, callback);
