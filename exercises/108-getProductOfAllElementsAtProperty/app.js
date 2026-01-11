function getProductOfAllElementsAtProperty(obj, key) {
  // your code here

  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return 0;
  }

  let result = 1;
  for (let i = 0; i < obj[key].length; i++) {
    result *= obj[key][i]
  }

  return result

}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
