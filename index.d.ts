
declare module '@team-griffin/capra' {
  import * as r from 'ramda';
  import * as rAdjunct from 'ramda-adjunct';

  function curry1<A, R>(fn: (x: A, ...rest: any[]) => R): (x: A) => R
  function curry2<A, B, R>(fn: (a: A, b: B, ...rest: any[]) => R): r.CurriedFunction2<A, B, R>
  function curry3<A, B, C, R>(fn: (a: A, b: B, c: C, ...rest: any[]) => R): r.CurriedFunction3<A, B, C, R>
  function curry4<A, B, C, D, R>(fn: (a: A, b: B, c: C, d: D, ...rest: any[]) => R): r.CurriedFunction4<A, B, C, D, R>

  function nuller(): null
  function isTrue(x: any): boolean
  function isFalse(x: any): boolean
  function mapIndexed<T, U>(iterator: (el: T, key: number, list: T[]) => U, list: T[]): U[]
  function mapIndexed<T, U>(iterator: (el: T, key: number, list: T[]) => U): (list: T[]) => U[]
  function allTrue<T>(list: T[]): boolean
  function allFalse<T>(list: T[]): boolean
  function anyTrue<T>(list: T[]): boolean
  function anyFalse<T>(list: T[]): boolean
  function hasLength<T>(list: T[]): boolean
  function isNotNilOrEmpty(x: any): boolean
  function ifElseBool<T, R>(trueFn: (x: T) => R, falseFn: (x: T) => R, value: T): R
  function ifElseBool<T, R>(trueFn: (x: T) => R, falseFn: (x: T) => R): (value: T) => R
  function ifElseBool<T, R>(trueFn: (x: T) => R): (falseFn: (x: T) => R, value: T) => R
  function ifElseBool<T, R>(trueFn: (x: T) => R): (falseFn: (x: T) => R) => (value: T) => R
  function arrayOf<T>(value: T, count: number): T[]
  function arrayOf<T>(value: T): (count: number) => T[]
  function percentage(a: number, b: number): number
  function percentage(a: number): (b: number) => number
  function filterObjIndexed<T>(
    pred: (v: T[keyof T], key: keyof T) => boolean,
    obj: T,
  ): T
  function filterObjIndexed<T>(
    pred: (v: T[keyof T], key: keyof T) => boolean,
  ): (
    obj: T,
  ) => T
  function rejectObjIndexed<T>(
    pred: (v: T[keyof T], key: keyof T) => boolean,
    obj: T,
  ): T
  function rejectObjIndexed<T>(
    pred: (v: T[keyof T], key: keyof T) => boolean,
  ): (
    obj: T,
  ) => T
  function sortObj<T>(
    pred: (a: keyof T, b: keyof T) => number,
    obj: T
  ): T
  function sortObj<T>(
    pred: (a: keyof T, b: keyof T) => number,
  ): (
    obj: T
  ) => T
  function sortObjBy<T>(
    fn: (a: keyof T) => number,
    obj: T,
  ): T
  function sortObjBy<T>(
    fn: (a: keyof T) => number,
  ): (
    obj: T,
  ) => T

  function add(a: number, b: number): number
  function add(a: number): (b: number) => number

  function divide(a: number, b: number): number
  function divide(a: number): (b: number) => number

  function modulo(a: number, b: number): number
  function modulo(a: number): (b: number) => number

  function multiply(a: number, b: number): number
  function multiply(a: number): (b: number) => number

  function subtract(a: number, b: number): number
  function subtract(a: number): (b: number) => number

  function gt(a: number, b: number): boolean
  function gt(a: number): (b: number) => boolean

  function gte(a: number, b: number): boolean
  function gte(a: number): (b: number) => boolean

  function lt(a: number, b: number): boolean
  function lt(a: number): (b: number) => boolean

  function lte(a: number, b: number): boolean
  function lte(a: number): (b: number) => boolean
}
