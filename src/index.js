import * as r from 'ramda';

export const nuller = r.always(null);

export const isTrue = r.equals(true);

export const isFalse = r.equals(false);

export const allTrue = r.all(isTrue);

export const allFalse = r.all(isFalse);

export const anyTrue = r.any(isTrue);

export const anyFalse = r.any(isTrue);

export const hasLength = r.pipe(
  r.length,
  r.gt(r.__, 0),
);

export const isNotNilOrEmpty = r.both(
  r.complement(r.isNil),
  r.complement(r.isEmpty),
);

export const mapIndexed = r.addIndex(r.map);

export const ifElseBool = r.ifElse(isTrue);

export const percentage = r.pipe(
  r.divide,
  r.multiply(100),
);
