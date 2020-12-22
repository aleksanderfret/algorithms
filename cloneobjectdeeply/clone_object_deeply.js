function cloneDeeply(item) {
  let result = null;

  if (!item) return result;

  if (Array.isArray(item)) {
    result = [];
    item.forEach(element => {
      result.push(cloneDeeply(element));
    });
  } else if (item instanceof Object && !(item instanceof Function)) {
    result = {};
    for (let key in item) {
      if (key) {
        result[key] = cloneDeeply(item[key]);
      }
    }
  }

  return result || item;
}
