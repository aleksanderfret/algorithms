export type Values<T extends {}> = T[keyof T][];

export function values<T extends {}>(obj: T): Values<T> {
  return Object.values(obj) as Values<T>;
}
