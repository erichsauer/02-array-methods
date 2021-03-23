map = (array, callback) =>
{
  let newArray = [];
  for (const item of array) {
    newArray = [ ...newArray, callback(item) ];
  }
  return newArray;
};



module.exports = { map };
