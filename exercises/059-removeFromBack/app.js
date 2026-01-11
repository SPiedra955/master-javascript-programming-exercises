function removeFromBack(arr) {
    // your code here
    let newArr = arr.slice(0, arr.length - 1);
    return newArr;
}

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
