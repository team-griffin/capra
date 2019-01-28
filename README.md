# capra

## curry1
## curry2
## curry3
## curry4

## nuller
```js
(...args: Array<any>) => null
```
A function that always returns null

## isTrue
```js
(arg: any) => boolean
```
Tests whether the provided argument is `true`

## isFalse
```js
(arg: any) => boolean
```
Tests whether the provided argument is `false`

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
(arr: Array<any>) => boolean
```
Tests whether the provided array contains any elements

## isNotNilOrEmpty
```js
(arg: Array<any> | Object | string)
```
Effectively the opposite of ramda-adjunct's `isNilOrEmpty`

## mapIndexed
```js
(
  fn: (value: any, index: number) => any,
  list: Array<any>,
) => Array<any>
```
a variant of `map` that includes the index

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
