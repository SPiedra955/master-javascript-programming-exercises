function findLongestPalindrome(sentence) {
  // your code here
  let words = sentence.split(' ');
  let longest = '';

  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      let phrase = words.slice(i, j + 1).join(' ');
      if (isPalindrome(phrase) && phrase.length > longest.length) {
        longest = phrase;
      }
    }
  }
  return longest;
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // your code here
  let clean = word.toLowerCase();
  return clean === reverseString(clean);
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
