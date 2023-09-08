export const equalSets = <T>(a?: Set<T>, b?: Set<T>) => {
  if (!a && !b) {
    return true;
  }

  if (!a || !b || a.size !== b.size) {
    return false;
  }

  return Array.from(a).every(element => b.has(element));
};
