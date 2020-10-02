import { expect } from 'chai';
import assocPath from '../assoc-path';

describe('assocPath', () => {
  it('set a deeply nested property', () => {
    const a = {};
    const b = assocPath(a, [ 'foo', 'bar', 'baz' ], 'value');
    expect(b).to.deep.equal({
      foo: {
        bar: {
          baz: 'value',
        },
      },
    });
  });
  it('does not lose existing properties', () => {
    const a = {
      foo: {
        test: true,
        bar: {
          test: true,
        },
      },
    };
    const b = assocPath(a, [ 'foo', 'bar', 'baz' ], 'value');
    expect(b).to.deep.equal({
      foo: {
        test: true,
        bar: {
          test: true,
          baz: 'value',
        },
      },
    });
  });
  it('overwrites an existing path property', () => {
    const a = {
      foo: {
        bar: 'hello',
      },
    };
    const b = assocPath(a, [ 'foo', 'bar' ], 'value');
    expect(b).to.deep.equal({
      foo: {
        bar: 'value',
      },
    });
  });
  it('can handle arrays', () => {
    const a = {
      foo: [
        [
          {
            bar: {},
          },
        ],
      ],
    };
    const b = assocPath(a, [ 'foo', '0', '0', 'bar', 'baz' ], 'value');
    expect(b).to.deep.equal({
      foo: [
        [
          {
            bar: {
              baz: 'value',
            },
          },
        ],
      ],
    });
  });
  it('can handle an undefined starting value', () => {
    const b = assocPath(void 0, [ 'foo', 'bar', 'baz' ], 'value');
    expect(b).to.deep.equal({
      foo: {
        bar: {
          baz: 'value',
        },
      },
    });
  });
});
