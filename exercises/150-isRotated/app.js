function isRotated(str1, str2) {
  // your code here
  if (str1.length != str2.length) {
    return false;
  }
  if (str2.indexOf(str1[0])) {
    return true;
  }
  return false;
}

console.log(isRotated('hello world', 'orldhello w')); // --> true
console.log(isRotated('hello world', 'omrel wp')); // --> false

