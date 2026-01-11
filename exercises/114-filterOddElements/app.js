function filterOddElements(arr) {
  // your code here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      result.push(arr[i])
    }
  }
  return result;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
