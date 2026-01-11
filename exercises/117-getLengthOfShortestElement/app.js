function getLengthOfShortestElement(arr) {
    // your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            return arr[0].length;
        }
    }
    return 0;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
