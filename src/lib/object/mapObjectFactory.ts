import { MapCallback, mapObject } from './mapObject.js';

export const mapObjectFactory =
  <T extends Object, K extends { [N in keyof T]: any }>(
    callback: MapCallback<T>
  ) =>
  (object: T): K =>
    mapObject(object, callback);
