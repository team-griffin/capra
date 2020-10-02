/* eslint-disable max-len */
/*
omit(obj, [ 'propA', 'propB' ])
*/
interface OmitFn {
  <T, K extends keyof T>(obj: T, keys: [ K ]): Omit<T, K>
  <T, K extends keyof T, L extends keyof T>(obj: T, keys: [ K, L ]): Omit<T, K | L>
  <T, K extends keyof T, L extends keyof T, M extends keyof T>(obj: T, keys: [ K, L, M ]): Omit<T, K | L | M>
  <T, K extends keyof T, L extends keyof T, M extends keyof T, N extends keyof T>(obj: T, keys: [ K, L, M, N ]): Omit<T, K | L | M | N>
  <T, K extends keyof T, L extends keyof T, M extends keyof T, N extends keyof T, O extends keyof T>(obj: T, keys: [ K, L, M, N, O ]): Omit<T, K | L | M | N | O>
  <T, K extends keyof T, L extends keyof T, M extends keyof T, N extends keyof T, O extends keyof T, P extends keyof T>(obj: T, keys: [ K, L, M, N, O, P ]): Omit<T, K | L | M | N | O | P>
  <T>(obj: T, keys: any[]): any
}

const omit: OmitFn = <T, K extends keyof T>(
  obj: T,
  keys: K[],
) => {
  const result = { ...obj };
  keys.forEach((k) => {
    delete result[k];
  });
  return result;
};

export default omit;
