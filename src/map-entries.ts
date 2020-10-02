/*
forEntries({ key: 'value' }, (entries) => entries.map(([ key, value ]) => [ key, value ]));

basically it's like doing
Object.fromEntries(Object.entries(obj).map(fn))

It'll mostly be used as an internal util for mapping over objects
*/

const mapEntries = <T, R>(
  obj: T,
  fn: (
    entries: Array<[ string, T[keyof T] ]>
  ) => Array<[ string, R ]>,
): {
  [key: string]: R,
} => {
  const entries = Object.entries(obj);
  const mapped = fn(entries);
  return Object.fromEntries(mapped);
};

export default mapEntries;
