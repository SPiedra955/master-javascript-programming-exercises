function filterOddLengthWords(words) {
    // your code here
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 != 0) {
            result.push(words[i]);
        }
    }
    return result;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
