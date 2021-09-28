function sortNumbers(array) {
    result = [];
    for (let el of array) {
        if (el < 0) {
            result.unshift(el);
        }
        else {
            result.push(el);
        }
    }
    console.log(result.join('\n'))
}

sortNumbers([7, -2, 8, 9])
sortNumbers([3, -2, 0, -1])