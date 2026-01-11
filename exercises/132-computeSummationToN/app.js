function computeSummationToN(n) {
  // your code here
  let result = 0;
  for (let i = 0; i < n + 1; i++) {
    result += i;
  }
  return result;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

