// Write your function here
function keep(arrel, element) {
    let result = [];
    for (let i = 0; i < arrel.length; i++) {
        if (arrel[i] == element) {
            result.push(arrel[i]);
        }
    }
    return result;
}
let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]