function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let taxes = preTaxAndTipAmount * 0.095;
    let bills = preTaxAndTipAmount * 0.15;
    let total = preTaxAndTipAmount + taxes + bills;
    return total
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
