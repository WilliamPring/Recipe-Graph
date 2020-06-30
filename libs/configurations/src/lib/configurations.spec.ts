import { DateScalar } from './common/scalars';
import { Kind } from 'graphql';

describe('DateScalar', () => {
  it('should work', () => {
    const date = new DateScalar();
    expect(date.description).toEqual('Date custom scalar type');
    expect(date.parseValue('2020-12-31')).toEqual(new Date(2020, 11, 31));
    expect(date.parseLiteral({kind: Kind.STRING, value: "2020-12-31"})).toEqual(new Date(2020, 11, 31));
  });
});
