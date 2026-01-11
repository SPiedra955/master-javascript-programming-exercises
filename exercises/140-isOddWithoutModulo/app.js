function isOddWithoutModulo(num) {
    // your code here
    let numb1 = Math.abs(num);
    let numb2 = 2;
    let quotient = numb1 / numb2;
    let product = Math.trunc(quotient) * numb2;
    let reminder = numb1 - product;
    if (reminder > 0) {
        return true;
    }
    return false;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
