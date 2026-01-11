// Write your function here
function removeElement(arre, element) {
    let newra = [];

    for (let i = 0; i < arre.length; i++) {
        if (arre[i] != element) {
            newra.push(arre[i]);
        }
    }
    return newra;
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]