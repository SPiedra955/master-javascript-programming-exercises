function getElementsAfter(array, n) {
  // your code here
  let index = array.length;
  return array.slice(n + 1, index);
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']
