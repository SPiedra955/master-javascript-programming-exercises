function fromListToObject(array) {
  // your code here
  let newObj = {};
  for (let i = 0; i < array.length; i++) {
    newObj[array[i][0]] = array[i][1];
  }
  return newObj;

}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
