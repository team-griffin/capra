import { expect } from 'chai';
import filterObj from '../filter-obj';

describe('filterObj', () => {
  it('removes properties', () => {
    const a = {
      foo: 'FOO',
      bar: 'BAR',
      baz: 'BAZ',
    };
    const b = filterObj(a, (key, value) => key === 'foo' || value === 'BAZ');

    expect(b).to.deep.equal({
      foo: 'FOO',
      baz: 'BAZ',
    });
  });
});
