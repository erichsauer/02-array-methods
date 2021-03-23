const { map, filter } = require('./array-methods-from-scratch');

describe('map function', () => {
  it('should take in an array and a callback and return a new array that has been mutated', () => {
    expect(map([4, 6, 12, 'eleven'], (item) => item + 'bob')).toEqual([
      '4bob',
      '6bob',
      '12bob',
      'elevenbob',
    ]);
  });

  it('should take in an array and a callback and return a new array that has been mutated', () => {
    expect(map([4, 6, 12], (item) => item + 3)).toEqual([7, 9, 15]);
  });
});

describe('filter function', () => {
  it('should take in an array and a callback and return a new array containing only items that resolve to true when the callback is called with them 😵‍💫', () => {
    expect(
      filter(['billy', 'joe', 'garol', 'skippy'], (item) =>
        item.startsWith('g')
      )
    ).toEqual(['garol']);
  });
});
