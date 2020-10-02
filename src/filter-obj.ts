/*
filterObj(obj, (key, value) => true)
*/
import mapEntries from './map-entries';

const filterObj = <T>(
  obj: T,
  fn: (
    key: string,
    value: T[keyof T]
  ) => any,
) => {
  return mapEntries(obj, (entries) => {
    return entries.filter((entry) => {
      return fn(...entry);
    });
  });
};

export default filterObj;
