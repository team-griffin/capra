/* eslint-disable max-len */
interface AssocPath {
  <T, K extends string, V>(
    obj: T,
    path: [ K ],
    value: V,
  ): T & Record<K, V>
  <T, K extends string, L extends string, V>(
    obj: T,
    path: [ K, L ],
    value: V,
  ): T & Record<K, Record<L, V>>
  <T, K extends string, L extends string, M extends string, V>(
    obj: T,
    path: [ K, L, M ],
    value: V,
  ): T & Record<K, Record<L, Record<M, V>>>
  <T, K extends string, L extends string, M extends string, N extends string, V>(
    obj: T,
    path: [ K, L, M, N ],
    value: V,
  ): T & Record<K, Record<L, Record<M, Record<N, V>>>>
  <T, K extends string, L extends string, M extends string, N extends string, O extends string, V>(
    obj: T,
    path: [ K, L, M, N, O ],
    value: V,
  ): T & Record<K, Record<L, Record<M, Record<N, Record<O, V>>>>>
  <T, K extends string, L extends string, M extends string, N extends string, O extends string, P extends string, V>(
    obj: T,
    path: [ K, L, M, N, O, P ],
    value: V,
  ): T & Record<K, Record<L, Record<M, Record<N, Record<O, Record<P, V>>>>>>
  (
    obj: any,
    path: string[],
    value: any
  ): any
}

const assocPath: AssocPath = (
  obj: any,
  path: string[],
  value: any,
) => {
  const key = path[0];
  const rest = path.slice(1);

  const child = rest.length ? assocPath(obj?.[key], rest, value) : value;

  if (Array.isArray(obj)) {
    const arr = [ ...obj ];
    // @ts-ignore
    arr[key] = child;
    return arr;
  }

  return {
    ...obj,
    [key]: child,
  };
};

export default assocPath;
