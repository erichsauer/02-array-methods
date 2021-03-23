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
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (callback(item)) return i;
  }
  return i;
}

module.exports = { map, filter };
