import * as r from 'ramda';
import * as rA from 'ramda-adjunct';

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
