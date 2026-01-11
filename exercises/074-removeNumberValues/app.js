function removeNumberValues(obj) {
    // your code here
    for (let element in obj) {
        if (Number.isInteger(obj[element])) {
            delete obj[element];
        }
    }
    return obj;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
