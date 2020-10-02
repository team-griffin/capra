/*
mapObj(obj, (key, value) => [ key, value ])

maps over an object's properties, you must return a tuple of key/value pairs
this gives you the freedom to change keys as well as values if you need to
*/
import mapEntries from './map-entries';

const mapObj = <T, R>(
  obj: T,
  fn: (key: string, value: T[keyof T]) => [ string, R ],
): {
  [key: string]: R,
} => {
  return mapEntries(obj, (entries) => {
    return entries.map((entry) => {
      return fn(...entry);
    });
  });
};

export default mapObj;
