function getLargestElementAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
    return [];
  }

  let result;

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] > obj[key][0]) {
      result = obj[key][i];
    }
  }
  return result;
}

let obj = {
  key: [-5, -4, -15, -3, -20, -80]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
