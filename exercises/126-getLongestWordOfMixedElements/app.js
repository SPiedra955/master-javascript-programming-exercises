function getLongestWordOfMixedElements(arr) {
    // your code here

    let result = [];
    let longest;

    for (let element of arr) {
        if (typeof element === "string") {
            result.push(element);
        }
    }


    for (let i = 0; i < result.length; i++) {
        if (result[0].length > result[i].length) {
            longest = result[0];
        } else {
            longest = result[i];
        }
    }

    if (result.length == 0) {
        return '';
    }

    return longest;

}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
