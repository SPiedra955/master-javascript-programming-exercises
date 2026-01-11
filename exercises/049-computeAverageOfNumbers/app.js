// Write your function here
function computeAverageOfNumbers(arrayOfNumbers) {

    let total = 0;
    if (arrayOfNumbers.length == 0) { return 0 }

    for (let i = 0; arrayOfNumbers.length > i; i++) {
        total += arrayOfNumbers[i]
    }

    return (total / arrayOfNumbers.length)

}
