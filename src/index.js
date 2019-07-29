import * as r from 'ramda';
import * as rA from 'ramda-adjunct';

export * from './math';

export const curry1 = r.curryN(1);
export const curry2 = r.curryN(2);
export const curry3 = r.curryN(3);
export const curry4 = r.curryN(4);

export const nuller = rA.stubNull;
export const isTrue = rA.isTrue;
export const isFalse = rA.isFalse;
export const mapIndexed = rA.mapIndexed;

export const allTrue = r.all(isTrue);

export const allFalse = r.all(isFalse);

export const anyTrue = r.any(isTrue);

export const anyFalse = r.any(isTrue);

export const hasLength = rA.lengthGt(0);

export const isNotNilOrEmpty = r.complement(rA.isNilOrEmpty);

export const ifElseBool = r.ifElse(isTrue);

export const arrayOf = curry2(
  r.converge(
    r.times,
    [
      r.always,
      r.nthArg(1),
    ],
  ),
);

export const percentage = r.pipe(
  r.divide,
  r.multiply(100),
);

export const filterObjIndexed = curry2((fn, obj) => r.pipe(
  r.mapObjIndexed((v, k) => {
    if (fn(v, k)) {
      return v;
    }
    return '__@@tg/capra/REJECTED__';
  }),
  r.reject(r.equals('__@@tg/capra/REJECTED__')),
)(obj));

export const rejectObjIndexed = curry2((fn, obj) => {
  return filterObjIndexed(r.complement(fn), obj);
});

export const sortObj = curry2((fn, obj) => {
  const keys = r.sort(fn, r.keys(obj));
  return r.reduce(
    r.converge(
      r.assoc,
      [
        r.nthArg(1),
        r.pipe(
          r.nthArg(1),
          r.prop(r.__, obj),
        ),
        r.nthArg(0),
      ],
    ),
    {},
    keys,
  );
});

export const sortObjBy = curry2((fn, obj) => {
  const sortFn = (a, b) => {
    const aa = fn(a);
    const bb = fn(b);
    if (aa < bb) {
      return -1;
    }
    if (aa > bb) {
      return 1;
    }
    return 0;
  };
  return sortObj(sortFn, obj);
});
