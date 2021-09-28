function diagonalSums(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let size = matrix.length - 1

    for (i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i]
        secondaryDiagonal += matrix[i][size - i]
    }

    return (primaryDiagonal + ' ' + secondaryDiagonal);
}

console.log(diagonalSums([[20, 40],
    [10, 60]]
));
console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));