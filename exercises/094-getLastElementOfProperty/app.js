// Write your function here
function getLastElementOfProperty(ob, ke) {
    if (!ob[ke] || !Array.isArray(ob[ke])) {
        return undefined;
    }
    let last = ob[ke].pop();
    return last;
}
let obj = {
    key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5