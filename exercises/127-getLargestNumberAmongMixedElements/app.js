function getLargestNumberAmongMixedElements(arr) {
    // your code here

    let result = [];

    for (let element of arr) {
        if (typeof element === "number") {
            result.push(element);
        }
    }

    if (result.length == 0) {
        return 0;
    }

    return Math.max(...result);

}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
