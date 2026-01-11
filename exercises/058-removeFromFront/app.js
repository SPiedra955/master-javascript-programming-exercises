function removeFromFront(arr) {
    // your code here
    let newArr = arr.slice(1, arr.length);
    return newArr;
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
