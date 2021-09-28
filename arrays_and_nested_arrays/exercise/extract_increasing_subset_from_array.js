function increaseArray(array) {
    let nextEl = array[0]
    let result = [nextEl]
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= nextEl) {
            nextEl = array[i]
            result.push(array[i])
        }
    }
    return result
}

console.log(increaseArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(increaseArray([1,
    2,
    3,
    4]
));
console.log(increaseArray([20,
    3,
    2,
    15,
    6,
    1]
));