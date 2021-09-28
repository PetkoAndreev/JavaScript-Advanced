function biggerHalf(array) {
    array.sort((a, b) => a - b);
    middle = Math.floor(array.length / 2);
    half = array.slice(middle);
    return half;
}

console.log(biggerHalf([4, 7, 2, 5]))
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))