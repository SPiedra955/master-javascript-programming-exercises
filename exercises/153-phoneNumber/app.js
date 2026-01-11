function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function () {
  // your code here
  let area = this.getAreaCode();
  let exchange = this.getExchangeCode();
  let lineNumber = this.getLineNumber();
  return `${this.parenthesize(area)} ${exchange}-${lineNumber}`;
};

PhoneNumberFormatter.prototype.getAreaCode = function () {
  // your code here
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function () {
  // your code here
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function () {
  // your code here
  return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function (string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function (start, end) {
  return this.numbers.slice(start, end).join('');
};

let number = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
console.log(number.render()); // --> "(650) 835-9172"
