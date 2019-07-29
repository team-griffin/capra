# capra

## curry1
## curry2
## curry3
## curry4

## allTrue
```js
(list: Array<any>) => boolean
```
Tests if all elements of a list are `true`

## allFalse
```js
(list: Array<any>) => boolean
```
Tests if all elements of a list are `false`

## anyTrue
```js
(list: Array<any>) => boolean
```
Tests if any element of a list is `true`

## anyFalse
```js
(list: Array<any>) => boolean
```
Tests if any element of a list is `false`

## hasLength
```js
(arg: Array<any> | string) => boolean
```
Tests whether the provided array contains any elements, or string has any characters.

## isNotNilOrEmpty
```js
(arg: Array<any> | Object | string)
```
Effectively the opposite of ramda-adjunct's `isNilOrEmpty`

## ifElseBool
```js
(
  trueFn: Function,
  falseFn: Function,
) => (arg: any) => any
```
A shortcut for `R.ifElse(r.equals(true))`

## arrayOf
```js
(
  value: any,
  count: number,
) => Array<any>
```
Creates an array of the given size, where each element is `value`

## percentage
```js
(
  x: Number,
  y: Number,
) => Number
```
Returns x as a percentage of y `(x / y) * 100`

## filterObjIndexed
```js
(
  fn: (v: any, key: string) => boolean,
  obj: object
) => object
```
A mix between `r.mapObjIndexed` and `r.filter`. When `fn` returns `false` the property will be removed from the object.

## rejectObjIndexed
```js
(
  fn: (v: any, key: string) => boolean,
  obj: object
) => object
```
The opposite of `filterObjIndexed`

## sortObj
```js
(
  fn: (a: any, b: any) => 1 | 0 | -1,
  obj: object
) => object
```
Sorts the keys of an object by the comparitor function

## sortObjBy
```js
(
  fn: (a: any, b: any) => any,
  obj: object
) => object
```
A variant of `sortBy` for objects


The following are pipeable versions of ramda's math functions:
## add
## divide
## mean
## median
## modulo
## multiply
## subtract
## gt
## gte
## lt
## lte

The following methods have since been deprecated as they are already provided by ramda adjunct:
## nuller
see `rA.stubNull`
## isTrue
## isFalse
## mapIndexed
