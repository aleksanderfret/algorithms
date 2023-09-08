export const localStorageItem = <T, K extends string>(key: K) => {
  const set = (item: T) => {
    localStorage.setItem(key, JSON.stringify(item));
  };

  const get = () => {
    const data = localStorage.getItem(key);

    return data ? (JSON.parse(data) as T) : null;
  };

  const remove = () => {
    localStorage.removeItem(key);
  };

  return { get, remove, set };
};
