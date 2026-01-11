function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let interestFrec = 1 + interestRate / compoundingFrequency;
  let nt = compoundingFrequency * timeInYears;
  let periodiComp = principal * (interestFrec ** nt);
  let totalCompInt = periodiComp - principal;
  return totalCompInt;
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
