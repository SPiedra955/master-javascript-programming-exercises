// Write your function here
function getIndexOf(car, string) {
    let counter = 0;
    for (let i = 0; string.length > i; i++) {
        if (string[i] == car) {
            return i
        }
    }
    return -1

}

