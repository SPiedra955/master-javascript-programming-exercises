function detectOutlierValue(string) {
    // your code here
    let strToNum = string.split(' ');
    let result = [];
    let index = 0;
    let even = 0;
    let odd = 0;

    for (let element of strToNum) {
        let num = Number(element);
        result.push(num);

        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    let findOdd = odd < even;

    for (let i = 0; i < result.length; i++) {
        if (findOdd && result[i] % 2 !== 0) {
            index = i;
            break;
        }
        if (!findOdd && result[i] % 2 === 0) {
            index = i;
            break;
        }
    }
    return index + 1;
    
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
