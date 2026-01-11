function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let l1 = word1.length;
    let l2 = word2.length;
    let l3 = word3.length;
    if (l1 > l2 || l1 > l3) {
        return word1
    } else if (l2 > l3 || l2 > l3) {
        return word2
    } else if (l1 == l2 || l1 == l3) {
        return word1
    } else {
        return word3
    }

}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
