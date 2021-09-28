function ticTacToe(arr) {
    const matrix = [0, 0, 0].map(x => ["false", "false", "false"])
    let player = "X"

    function isWinningMove(matrix, row, place) {
        // after the move has been made, we -->
        // check current row for 3 equals
        // || reducing to new array with column === the place player is marking.
        //e.g. if player is on place 2 in row 1,
        //we make new array with all places 2 from all 3 rows
        //to check for column equality
        // || adding main diagonal to new array, checking it for equality
        // || adding second diagonal and checking it.
        return (
            matrix[row].every(x => x === player) ||
            matrix
                .reduce((a, v) => {
                    a.push(v[place])
                    return a
                }, [])
                .every(x => x === player) ||
            [matrix[0][0], matrix[1][1], matrix[2][2]].every(x => x === player) ||
            [matrix[0][2], matrix[1][1], matrix[2][0]].every(x => x === player)
        )
    }

    const printMatrix = matrix => console.log(matrix.map(x => x.join("\t")).join("\n"))

    for (let i = 0; i < arr.length; i++) {
        const [row, place] = arr[i].split(" ").map(Number)

        if (matrix[row][place] !== "false") {
            console.log("This place is already taken. Please choose another!")
            continue
        }
        matrix[row][place] = player

        if (isWinningMove(matrix, row, place)) {
            console.log(`Player ${player} wins!`)
            printMatrix(matrix)
            break
        }

        if (matrix.every(x => x.every(y => y !== "false"))) {
            console.log("The game ended! Nobody wins :(")
            printMatrix(matrix)
            break
        }

        player = player === "X" ? "O" : "X"
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)