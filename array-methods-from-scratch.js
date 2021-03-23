push = (array, item) => [...array, item]

map = (array, callback) =>
{
  let newArray = [];
  for (const item of array) {
    newArray = push(newArray, callback(item));
  }
  return newArray;
};

filter = (array, callback) =>
{
  let newArray = [];
  for (const item of array) {
    if (callback(item)) newArray = push(newArray, item);
    ;
  }
  return newArray;
}

findIndex = (array, callback) =>
{
  let result = -1
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (callback(item)) result = i;
  }
  return result;
}

reduce = (array, callback, initialValue) =>
{
  let acc;
  if (initialValue)
  {
    acc = initialValue
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      acc = callback(acc, item);
    }
  } else
  {
    acc = array[ 0 ]
    for (let i = 1; i < array.length; i++) {
      const item = array[i];
      acc = callback(acc, item);
    }
  };
  return acc;
}

module.exports = { map, filter, findIndex, reduce };
