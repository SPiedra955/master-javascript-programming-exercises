function filterEvenLengthWords(words) {
    // your code here
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 == 0) {
            result.push(words[i]);
        }
    }
    return result;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
