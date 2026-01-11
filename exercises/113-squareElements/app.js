function squareElements(arr) {
  // your code here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2);
  }
  return result;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
