function getAllWords(str) {
    // your code here
    let div = str.split(' ');
    let result = [];
    for (let i = 0; i < div.length; i++) {
        result.push(div[i]);
    }
    return result
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
