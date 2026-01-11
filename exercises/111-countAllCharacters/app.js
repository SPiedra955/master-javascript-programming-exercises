// Write your function here
function countAllCharacters(word) {

    let counter = {};

    for (let i = 0; i < word.length; i++) {
        if (!(word[i] in counter)) {
            counter[word[i]] = 0;
        }
        counter[word[i]]++;
    }
    return counter;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}