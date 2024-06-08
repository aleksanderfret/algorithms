export const reverseArray = <T = unknown>(items: T[]) => {
  const newArray = [...items];
  for (let i = 0; i < newArray.length; i++) {
    newArray.splice(i, 0, newArray.pop() as T);
  }

  return newArray;
};
