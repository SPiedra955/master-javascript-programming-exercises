function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let w1 = word1.length;
    let w2 = word2.length;
    let w3 = word3.length;

    if (w1 < w2 || w1 < w3) {
        return word1;
    } else if (w2 < w3 || w2 < w3) {
        return word2;
    } else if (w1 == w2 && w1 == w3) {
        return word1;
    } else {
        return word3;
    }
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
