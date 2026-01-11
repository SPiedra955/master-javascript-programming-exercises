// Write your function here
function getElementsThatEqual10AtProperty(ob, ke) {
    let result = [];
    if (!ob[ke]) {
        return [];
    }
    for (let i = 0; i < ob[ke].length; i++) {
        if (ob[ke][i] == 10) {
            result.push(ob[ke][i]);
        }
    }
    return result
}


let obj = {
    key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]