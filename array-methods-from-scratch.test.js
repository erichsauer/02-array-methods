const {
  map,
  filter,
  findIndex,
  reduce,
  every,
} = require('./array-methods-from-scratch');

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
      filter(['billy', 'joe', 'garol', 'skippy', 'goober'], (item) =>
        item.startsWith('g')
      )
    ).toEqual(['garol', 'goober']);
  });
});

describe('findIndex function', () => {
  it('should take in an array and a callback, returning the index of the first item that resolves to true with the callback is called with it', () => {
    expect(
      findIndex(['😯', '🙄', '🤠', '🤑'], (item) => item === '🤠')
    ).toEqual(2);
  });

  it('should take in an array and a callback, returning -1 if the callback never resolves to true', () => {
    expect(
      findIndex(['😯', '🙄', '🤠', '🤑'], (item) => item === '😶')
    ).toEqual(-1);
  });
});

describe('reduce function', () => {
  it('should take in an array, a callback and an optional initial value that will be accumulated with each item in the array according to the callback', () => {
    expect(
      reduce(
        ['junk', 'garbage', 'clutter', 'stuff', 'detritus', 'flotsam', '✨'],
        (acc, item) => {
          if (!acc['✨']) acc['✨'] = 0;
          if (!acc['🗑']) acc['🗑'] = 0;
          item === '✨' ? acc['✨']++ : acc['🗑']++;
          return acc;
        },
        {}
      )
    ).toEqual({ '✨': 1, '🗑': 6 });
  });
});

describe('every function', () => {
  it('should take in an array and a callback and return true if every item in the array meets the criteria of the callback; otherwise it should return false', () => {
    expect(
      every(['banana', 'orange', 'kiwi', 'pineapple'], (item) =>
        item.includes('a')
      )
    ).toEqual(false);
  });
});
