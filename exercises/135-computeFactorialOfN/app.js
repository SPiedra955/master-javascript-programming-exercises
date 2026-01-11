function computeFactorialOfN(n) {
    // your code here
    let result = 1;
    for (let i = 1; i < n + 1; i++) {
        result *= i;
    }
    return result;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24

