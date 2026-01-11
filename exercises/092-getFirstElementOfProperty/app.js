// Write your function here
function getFirstElementOfProperty(ob, ke) {

    if (!ob[ke] || !Array.isArray(ob[ke])) {
        return undefined
    }
    return ob[ke][0];
}

let obj = {
    key: [1, 2, 4]
};
let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
