import { entries } from './entries.js';

export type MapCallback<T extends Object> = (v: T[keyof T]) => any;

export const mapObject = <T extends Object, K = { [N in keyof T]: any }>(
  object: T,
  callback: MapCallback<T>
): K =>
  entries(object).reduce(
    (newObject, [key, value]) => ({ ...newObject, [key]: callback(value) }),
    {} as K
  );
