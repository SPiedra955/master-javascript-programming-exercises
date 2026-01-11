function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (!arr) {
        return '';
    }
    let shortest;
    let = result = [];
    for (let element of arr) {
        if (typeof element === "string") {
            result.push(element);
        }
    }

    for (let ele of result) {
        if (ele[0].length < ele.length) {
            shortest = ele;
        }
    }

    return shortest;

}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
