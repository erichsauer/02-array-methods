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

module.exports = { map, filter };
