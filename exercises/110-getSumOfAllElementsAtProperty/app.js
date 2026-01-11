function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return 0;
    }

    let result = 0;

    for (let i = 0; i < obj[key].length; i++) {
        result += obj[key][i];
    }

    return result;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
