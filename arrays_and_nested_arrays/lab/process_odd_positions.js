function getOdd(array) {
    const oddArray = []
    for (i = 1; i < array.length; i += 2) {
        oddArray.push(array[i] * 2);
    }
    return oddArray.reverse().join(', ');
}

// Variant 2 
// function solve(arr) {
//     return arr.filter((a, i) => i % 2 !== 0)
//       .map(x => x * 2)
//       .reverse()
//       .join(' ');
//   }

console.log(getOdd([10, 15, 20, 25]))
console.log(getOdd([3, 0, 10, 4, 7, 3]))