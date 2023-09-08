export const olderThan24 = (date: number | Date) => {
  const then = typeof date === 'number' ? date : date.getTime();
  const now = new Date().getTime();

  const diff = Math.abs(now - then) / (60 * 60 * 1000);

  return diff > 24;
};

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function entries<T>(obj: T): Entries<T> {
  return Object.entries(obj) as Entries<T>;
}

export type Keys<T extends {}> = (keyof T)[];

export function keys<T>(obj: T): Keys<T> {
  return Object.keys(obj) as Keys<T>;
}

type TimeUnits = {
  [key in Intl.RelativeTimeFormatUnit]: number;
};

type TimeValues = Pick<
  TimeUnits,
  'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
>;

const timeUnits: TimeValues = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const getRelativeTime = (
  date1: Date | number,
  date2: Date | number = new Date()
) => {
  const d1 = typeof date1 === 'number' ? date1 : date1.getTime();
  const d2 = typeof date2 === 'number' ? date2 : date2.getTime();

  const diff = d1 - d2;

  let relativeTime = '';

  entries<TimeValues>(timeUnits).every(([unit, value]) => {
    if (Math.abs(diff) > value || unit === 'second') {
      relativeTime = rtf.format(Math.round(diff / value), unit);

      return false;
    }

    return true;
  });

  return relativeTime;
};
