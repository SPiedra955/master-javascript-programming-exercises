function modulo(num1, num2) {
    // your code here
    let numb1 = Math.abs(num1);
    let numb2 = Math.abs(num2);
    let quotient = numb1 / numb2;
    let product = Math.trunc(quotient) * numb2;
    let reminder = numb1 - product;
    if (num1 < 0) {
        return -reminder;
    }
    return reminder
}

let output = modulo(-25, 4);
console.log(output); // --> 1
