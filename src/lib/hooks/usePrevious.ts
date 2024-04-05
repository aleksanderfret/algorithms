import { useRef } from 'react';

interface Previous<T> {
  value: T;
  prev: T | null;
}

export function usePrevious<T>(value: T) {
  const ref = useRef<Previous<T>>({ prev: null, value });

  if (ref.current.value !== value) {
    ref.current = { prev: ref.current.value, value };
  }

  return ref.current.prev;
}
