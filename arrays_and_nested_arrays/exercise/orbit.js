function orbit(array) {
    let matrix = new Array(array[0]).fill(new Array(array[1]).fill(''))

    return matrix
        .map((x, i) => x.map((y, j) => Math.max(Math.abs(j - array[3]), Math.abs(i - array[2])) + 1))
        .map(x => x.join(" "))
        .join("\n")
}

console.log(orbit([4, 4, 0, 0]));
console.log(orbit([5, 5, 2, 2]));
console.log(orbit([3, 3, 2, 2]));