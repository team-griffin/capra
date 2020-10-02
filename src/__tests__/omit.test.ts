import { expect } from 'chai';
import omit from '../omit';

describe('omit', () => {
  it('omits properties', () => {
    const a = {
      foo: 'foo',
      bah: 'bah',
      baz: 'baz',
    };
    const b = omit(a, [ 'foo', 'baz' ]);
    
    expect(b).to.deep.equal({ bah: 'bah' });
  });
});
