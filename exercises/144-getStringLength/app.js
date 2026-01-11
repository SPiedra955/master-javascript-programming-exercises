function getStringLength(string) {
  // your code here
  let counter = 0;
  for (let obj of string) {
    counter++;
  }
  return counter;
}

let output = getStringLength('hello');
console.log(output); // --> 5
