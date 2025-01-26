import { useCallback, useState } from 'react';

type Item = Record<string, unknown>;
type AddItems<I extends Item> = (items: I[]) => void;
type Transformer<I extends Item, K extends keyof I, T = I> = (
  item: I,
  key?: K
) => T;
interface Output<I extends Item, T = I> {
  items: T[];
  addItems: AddItems<I>;
}

const getInitialItems = <I extends Item, K extends keyof I, T = I>(
  key: K,
  data?: Map<I[K], T> | I[],
  transformItem?: Transformer<I, K, T> | null
): Map<I[K], I | T> => {
  if (!data) {
    return new Map();
  }
  if (Array.isArray(data)) {
    return new Map(
      data.map(item => [
        item[key],
        transformItem ? transformItem(item, key) : item,
      ])
    );
  }

  return data;
};

export function useCollection<I extends Item, K extends keyof I, T = I>(
  transformItem: Transformer<I, K, T>,
  key: K,
  max?: number,
  collection?: Map<I[K], T> | I[]
): Output<I, T>;
export function useCollection<I extends Item, K extends keyof I>(
  transformItem: null,
  key: K,
  max?: number,
  collection?: Map<I[K], I> | I[]
): Output<I>;
export function useCollection<I extends Item, K extends keyof I, T = I>(
  transformItem: Transformer<I, K, T> | null,
  key: K,
  max = 1000,
  collection?: Map<I[K], T> | I[]
) {
  const [items, setItems] = useState<Map<I[K], I | T>>(() =>
    getInitialItems(key, collection, transformItem)
  );

  const addItems = useCallback(
    (items: I[]) => {
      setItems(prev => {
        items.forEach(item => {
          if (prev.has(item[key])) {
            prev.delete(item[key]);
          } else if (prev.size === max) {
            const firstKey = prev.keys().next().value;
            if (firstKey) {
              prev.delete(firstKey);
            }
          }
          prev.set(item[key], transformItem ? transformItem(item) : item);
        });

        return new Map(prev);
      });
    },
    [key, max, transformItem]
  );

  return {
    addItems,
    items: Array.from(items.values()),
  };
}
