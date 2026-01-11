function computeSumBetween(num1, num2) {
    // your code here
    if (num2 < num1) {
        return 0;
    }
    let result = 0;
    for (let i = num1; i < num2; i++) {
        result += i;
    }
    return result;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
