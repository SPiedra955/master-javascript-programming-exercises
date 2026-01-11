// Write your function here
function getOddLengthWordsAtProperty(ob, ke) {
    let result = [];
    if (!ob[ke]) {
        return []
    }

    for (let i = 0; i < ob[ke].length; i++) {
        if (ob[ke][i].length % 2 != 0) {
            result.push(ob[ke][i]);
        }
    }
    return result;
}
let obj = {
    key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']