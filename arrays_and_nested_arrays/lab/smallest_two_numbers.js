function smallestNums(array) {
    array.sort((a, b) => a - b);
    console.log(array.slice(0, 2));
}

smallestNums([30, 15, 50, 5])
smallestNums([3, 0, 10, 4, 7, 3])