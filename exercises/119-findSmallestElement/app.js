function findSmallestElement(arr) {
    // your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] > arr[i]) {
            return arr[i];
        }
    }
    return 0;

}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1