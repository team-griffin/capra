import * as r from 'ramda';

export const nuller = r.always(null);

export const isTrue = r.equals(true);

export const isFalse = r.equals(false);

export const hasLength = r.pipe(
  r.length,
  r.gt(r.__, 0),
);
