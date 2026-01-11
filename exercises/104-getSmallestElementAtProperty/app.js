function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
    return [];
  }

  let result = [];

  for (let i = 0; i < obj[key].length; i++) {
    obj[key].sort()
    result.push(obj[key][i]);
  }

  return result[0]
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
