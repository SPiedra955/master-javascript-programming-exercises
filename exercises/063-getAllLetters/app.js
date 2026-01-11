function getAllLetters(str) {
    // your code here
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
    }
    return result
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
