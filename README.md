# @team-griffin/capra
We can do a lot of cool stuff with the latest ES spec. Rest/spread, Object.entries, etc. For 90% of what lodash/underscore/ramda provides you can easily accomplish with native javascript now. Capra's aim is just to cover some of the more awkward computations that aren't out-of-the-box yet.

These methods are written for post-IE browsers so they're very small and very performant.

## map-obj
```ts
(obj: object, fn: (key: strng, value: any) => [ string, any ]): object
```
Calls `fn` with each `key`/`value` of `obj`. Expects a tuple of `newKey`/`newValue` in order to construct the return object.

### before
```ts
Object
  .entries(obj)
  .reduce((acc, [ key, value ]) => {
    const [ newKey, newValue ] = fn(key, value);
    return {
      ...acc,
      [newKey]: newValue,
    };
  }, {});
```

### after
```ts
mapObj(obj, fn);
```

## filter-obj
```ts
(obj: object, fn: (key: string, value: any) => boolean): object
```
Filters out object properties based on the predecate function.

### before
```ts
Object
  .entries(obj)
  .reduce((acc, [ key, value ]) => {
    if (fn(key, value)) {
      return {
        ...acc,
        [key]: value,
      };
    } else {
      return acc;
    }
  })
```

### after
```ts
filterObj(obj, fn);
```

## invert-obj
```ts
(obj: object): object
```
Inverts the key/value pairs of an object.

### before
```ts
Object
  .entries(obj)
  .reduce((acc, [ key, value ]) => {
    return {
      ...acc,
      [value]: key,
    };
  }, {});
```

### after
```ts
invertObj(obj);
```

## omit
```ts
(obj: object, keys: string[]): object
```
Omits the given keys from an object.

### before
```ts
const {
  foo,
  bah,
  ...withoutFooBah,
} = obj;
```

### after
```ts
const withoutFooBah = omit(obj, [ 'foo', 'bah' ]);
```

## assoc-path
```ts
(obj: object, path: string[], value: any): object
```
Adds a property at a deeply-nested level. This was an ugly mess of spread properties and was hard to do dynamically...

### before
```ts
{
  ...obj,
  foo: {
    ...obj?.foo,
    bah: {
      ...obj?.foo?.bah,
      baz: 'baz',
    },
  },
}
```

### after
```ts
assocPath(obj, [ 'foo', 'bah', 'baz' ], 'baz');
```

## group-by
```ts
(arr: any[], fn: (v: any) => string): object
```
Groups an array based on the given predecate

### before
_not really possible with native methods_

### after
```ts
groupBy(arr, (x) => x.category);
```

## is-empty
```ts
(a: any): boolean
```

## is-nil-or-empty
```ts
(a: any): boolean
```
