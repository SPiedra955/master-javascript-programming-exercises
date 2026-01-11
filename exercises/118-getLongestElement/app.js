function getLongestElement(arr) {
    // your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > arr[0].length) {
            return arr[i];
        }
    }
    return '';

}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
