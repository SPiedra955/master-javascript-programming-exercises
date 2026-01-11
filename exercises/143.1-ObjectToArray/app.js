function getAllKeys(obj) {
  // your code here
  let result = [];
  for (let element in obj) {
    result.push(element);
  }
  return result;
}

let output = getAllKeys({ name: "Sam", age: 25, hasPets: true });
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
