function removeArrayValues(obj) {
    // your code here
    for (let element in obj) {
        if (Array.isArray(obj[element])) {
            delete obj[element];
        }
    }
    return obj;

}