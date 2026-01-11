function getSquaredElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
    return [];
  }

  let result = obj[key].map((x) => Math.pow(x, 2));

  return result;

}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
