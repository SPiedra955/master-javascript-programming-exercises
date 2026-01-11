function getLengthOfLongestElement(arr) {
    // Your code here

    if (arr.length == 0) {
        return 0;
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].length);
    }

    result.sort().reverse();

    return result[0]

}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
