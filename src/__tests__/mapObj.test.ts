import { expect } from 'chai';
import mapObj from '../map-obj';

describe('mapObj', () => {
  it('maps values to new values', () => {
    const a = {
      foo: 'FOO',
      bah: 'BAH',
      baz: 'BAZ',
    };
    const b = mapObj(a, (key, value) => [ key, key ]);

    expect(b).to.deep.equal({
      foo: 'foo',
      bah: 'bah',
      baz: 'baz',
    });
  });
  it('maps keys to new keys', () => {
    const a = {
      foo: 'FOO',
      bah: 'BAH',
      baz: 'BAZ',
    };
    const b = mapObj(a, (key, value) => [ value, value ]);

    expect(b).to.deep.equal({
      FOO: 'FOO',
      BAH: 'BAH',
      BAZ: 'BAZ',
    });
  });
  it('reduces an object to a single key', () => {
    const a = {
      foo: 'FOO',
      bah: 'BAH',
      baz: 'BAZ',
    };
    const b = mapObj(a, (key, value) => [ 'foo', value ]);

    expect(b).to.deep.equal({
      foo: 'BAZ',
    });
  });
});
