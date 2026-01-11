function findShortestElement(arr) {
    // your code here

    for (let i = 0; i < arr.length; i++) {
        if (arr[0].length < arr[i].length) {
            return arr[0];
        }
    }

    return '';

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'