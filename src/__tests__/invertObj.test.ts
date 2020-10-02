import { expect } from 'chai';
import invertObj from '../invert-obj';

describe('invertObj', () => {
  it('inverts keys and values', () => {
    const a = {
      foo: 'FOO',
      bah: 'BAH',
      baz: 'BAZ',
    };
    const b = invertObj(a);

    expect(b).to.deep.equal({
      FOO: 'foo',
      BAH: 'bah',
      BAZ: 'baz',
    });
  });
});
