function sumDigits(num) {
    // your code here
    let intToStr = Math.abs(num).toString();
    let nums = [];
    let result = 0;

    for (let i = 0; i < intToStr.length; i++) {
        nums.push(Number(intToStr[i]));
    }

    if (num < 0) {
        nums[0] = -nums[0];
    }

    for (let number of nums) {
        result += number;
    }

    return result;
    
}

let output = sumDigits(-316);
console.log(output); // --> 4
