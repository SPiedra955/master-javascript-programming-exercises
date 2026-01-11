function addToFrontOfNew(arr, element) {
    // your code here
    let newEl = [element];
    for (let i = 0; i < arr.length; i++) {
        newEl.push(arr[i]);
    }
    return newEl;
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
