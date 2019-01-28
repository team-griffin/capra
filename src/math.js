import * as r from 'ramda';

// Ramdas math methods are not pipeable
// i.e. r.subtract(1)(5) is not 4, it's -4
// so we export some pipeable version of these methods
export const add = r.flip(r.add);
export const divide = r.flip(r.divide);
export const mean = r.flip(r.mean);
export const median = r.flip(r.median);
export const modulo = r.flip(r.modulo);
export const multiply = r.multiply;
export const subtract = r.flip(r.subtract);
export const gt = r.flip(r.gt);
export const gte = r.flip(r.gte);
export const lt = r.flip(r.lt);
export const lte = r.flip(r.lte);
