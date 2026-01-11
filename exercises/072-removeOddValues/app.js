function removeOddValues(obj) {
  // your code here
  for (let element in obj) {
    if (obj[element] % 2 != 0) {
      delete obj[element];
    }
  }
  return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
