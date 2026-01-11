let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (let x in obj2) {
        if (!(x in obj1)) {
            obj1[x] = obj2[x];

        }
    }
    return obj1;

}
console.log(obj1);
