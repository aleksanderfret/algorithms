/////////////// mapObject ///////////////
const mapObject = (object, callback) =>
  Object.entries(object).reduce(
    (newObject, [key, value]) => ({ ...newObject, [key]: callback(value) }),
    {}
  );

const mapObject = (callback) => (object) =>
  Object.entries(object).reduce(
    (newObject, [key, value]) => ({ ...newObject, [key]: callback(value) }),
    {}
  );

//////////// filterObject ///////////////
const filterObject = (object, callback) =>
  Object.entries(object).reduce(
    (newObject, [key, value]) =>
      callback(value) ? { ...newObject, [key]: value } : newObject,
    {}
  );

const filterObject = (callback) => (object) =>
  Object.entries(object).reduce(
    (newObject, [key, value]) =>
      callback(value) ? { ...newObject, [key]: value } : newObject,
    {}
  );

/////////////// enumGenerator ///////////////
const enumerable = (namespace) => (...keys) =>
  Object.freeze(keys.map((key) => [key, [namespace, key].join("/")])).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  );

export const asyncTypes = (key) =>
  asyncPostfixes.map((postfix) => [key, postfix].join("_"));

const enumGenerator = (namespace = null, callback = null) => (...keys) =>
  Object.freeze(
    keys
      .map((key) =>
        callback
          ? callback(key)
          : (key) => [key, namespace ? [namespace, key].join("/") : key]
      )
      .reduce((newObject, [key, value]) => ({ ...newObject, [key]: value }), {})
  );
