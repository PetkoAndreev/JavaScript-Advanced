function getBiggest(matrix) {
    let maxEl = 0
    for (i=0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (i == 0 && j == 0) {
                maxEl = matrix[i][j]
            }
            else if(matrix[i][j] > maxEl) {
                maxEl = matrix[i][j];
            }
        }
    }

    return maxEl;
}

console.log(getBiggest([[20, 50, 10],
    [8, 33, 145]]
   ))
console.log(getBiggest([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]   
   ))
