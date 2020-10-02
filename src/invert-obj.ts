/*
{ key: 'value' } -> { value: 'key' }
*/
import mapObj from './map-obj';

const invertObj = <T extends { [key: string]: string }>(
  obj: T,
) => {
  return mapObj(obj, (key, value) => [ value, key ]);
};

export default invertObj;
