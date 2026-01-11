function removeStringValues(obj) {
    // your code here
    for (let element in obj) {
        if (typeof (obj[element]) === 'string') {
            delete obj[element];
        }
    }
    return obj;
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
