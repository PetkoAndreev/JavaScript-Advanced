function equalNeighboors(matrix) {
    let counter = 0
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if ((i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j])) {
                counter += 1;
            }
            if (j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j + 1]) {
                counter += 1;
            }
        }
    }

    return counter;
}

console.log(equalNeighboors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
console.log(equalNeighboors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]
));
console.log(equalNeighboors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));

let result = 0;
for (let r = 0; r < matrix.length; r++) {
    let row = matrix[r];
    for (let c = 0; c < row.length; c++) {
        let currentElement = matrix[r][c];
        let rightElement;
        let bottomElement;
        
        if (c + 1 < matrix[r].length){
            rightElement = matrix[r][c+1];
            if (currentElement === rightElement) {
                result += 1;
            } 
        }
        if (r + 1 < matrix.length){
            bottomElement = matrix[r + 1][c];
            if (currentElement === bottomElement) {
                result += 1;
            }
        }
    }
}