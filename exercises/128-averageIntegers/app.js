function average(arr) {
  // your code here
  let avg = sum(arr) / arr.length;
  return avg;
}

function sum(arr) {
  // your code here
  let result = 0;
  for (let element of arr) {
    result += element;
  }
  return result;
}

console.log(average([1, 2])); // --> 1.5
