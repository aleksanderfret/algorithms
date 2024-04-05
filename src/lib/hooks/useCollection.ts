import { useCallback, useState } from 'react';

type CollectionId = string | number;
interface WithId {
  id: CollectionId;
}
type Transformer<T extends WithId, K> = (item: T) => K;
type AddItems<T extends WithId> = (items: T[]) => void;
const getInitialItems = <T extends WithId, K>(
  data?: Map<CollectionId, K> | Map<CollectionId, T> | T[],
  transformItem?: Transformer<T, K> | null
) => {
  if (!data) {
    return new Map();
  }
  if (Array.isArray(data)) {
    return new Map(
      data.map(item => [item.id, transformItem ? transformItem(item) : item])
    );
  }

  return data;
};

export function useCollection<T extends WithId, K>(
  transformItem: Transformer<T, K>,
  max?: number,
  initialCollection?: Map<CollectionId, K> | T[]
): { items: K[]; addItems: AddItems<T> };
export function useCollection<T extends WithId>(
  transformItem: null,
  max?: number,
  initialCollection?: Map<CollectionId, T> | T[]
): { items: T[]; addItems: AddItems<T> };
export function useCollection<T extends WithId, K>(
  transformItem: Transformer<T, K> | null,
  max = 1000,
  initialCollection?: Map<CollectionId, K> | Map<CollectionId, T> | T[]
) {
  const [items, setItems] = useState<Map<CollectionId, T | K>>(() =>
    getInitialItems(initialCollection, transformItem)
  );
  const addItems = useCallback(
    (items: T[]) => {
      setItems(prev => {
        items.forEach(item => {
          if (prev.has(item.id)) {
            prev.delete(item.id);
          } else if (prev.size === max) {
            const firstKey = prev.keys().next().value;
            prev.delete(firstKey);
          }
          prev.set(item.id, transformItem ? transformItem(item) : item);
        });

        return new Map(prev);
      });
    },
    [max, transformItem]
  );

  return {
    addItems,
    items: Array.from(items.values()),
  };
}
