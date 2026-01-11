function multiply(num1, num2) {
    // your code here
    let result = 0;
    let num1abs = Math.abs(num1);
    let num2abs = Math.abs(num2);

    if (num1abs == 0 || num2abs == 0) {
        return 0;
    }

    for (let i = 0; i < num1abs; i++) {
        result += num2abs
    }

    if ((num1 < 0 && num2 > 0) || (num2 < 0 && num1 > 0)) {
        return -result;
    }

    return result;
}

let output = multiply(5, -5);
console.log(output); //--> 28
