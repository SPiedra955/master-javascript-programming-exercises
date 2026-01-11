function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
    return 0;
  }

  let result = 0;
  let avg = obj[key].length;

  for (let i = 0; i < obj[key].length; i++) {
    result += obj[key][i];
  }

  return result / avg;

}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2 
