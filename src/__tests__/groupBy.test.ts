import { expect } from 'chai';
import groupBy from '../group-by';

describe('groupBy', () => {
  it('groups by the return value of a functor', () => {
    const a = [
      {
        id: 1,
        cat: 1,
      },
      {
        id: 2,
        cat: 2,
      },
      {
        id: 3,
        cat: 1,
      },
      {
        id: 4,
        cat: 2,
      },
    ];
    const b = groupBy(a, (item) => item.cat);

    expect(b).to.deep.equal({
      1: [ a[0], a[2] ],
      2: [ a[1], a[3] ],
    });
  });
});
