function findSmallestNumberAmongMixedElements(arr) {
  // your code here

  let comp = [];

  for (let element of arr) {
    if (typeof element === "number") {
      comp.push(element);
    }
  }

  if (comp.length === 0) {
    return 0;
  }

  return Math.min(...comp);

}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4