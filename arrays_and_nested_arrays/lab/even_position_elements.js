function evenIndexes(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i += 2) {
        resultArray.push(array[i]);
    };
    console.log(resultArray.join(' '));
}

evenIndexes(['20', '30', '40', '50', '60']);
evenIndexes(['5', '10']);