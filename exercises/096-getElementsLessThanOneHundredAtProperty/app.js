// Write your function here
function getElementsLessThan100AtProperty(ob, ke) {
    let result = [];
    if (!ob[ke]) {
        return []
    }

    for (let i = 0; i < ob[ke].length; i++) {
        if (ob[ke][i] < 100) {
            result.push(ob[ke][i]);
        }
    }
    return result;
}

let obj = {
    key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]