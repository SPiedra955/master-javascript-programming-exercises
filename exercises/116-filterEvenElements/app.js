function filterEvenElements(arr) {
    // your code here
    let result = arr.filter((x) => x % 2 == 0);
    return result;

}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
