// Write your function here
function getNthElementOfProperty(ob, ke, n) {
    if (!ob[ke] || !Array.isArray(ob[ke])) {
        return undefined;
    }
    return ob[ke][n];
}

