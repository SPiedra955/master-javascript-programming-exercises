// Write your function here
function getElementsGreaterThan10AtProperty(ob, ke) {
    let result = [];
    if (!ob[ke]) {
        return []
    }

    for (let i = 0; i < ob[ke].length; i++) {
        if (ob[ke][i] > 10) {
            result.push(ob[ke][i]);
        }
    }
    return result;
}



let obj = {
    key: [1, 20, 30]
};
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]