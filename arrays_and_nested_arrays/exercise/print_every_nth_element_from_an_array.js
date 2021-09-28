function printElements(array, step) {
    result = []
    for (i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }

    return result;
}

console.log(printElements(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));
console.log(printElements(['dsa',
    'asd',
    'test',
    'tset'],
    2
));
console.log(printElements(['1',
    '2',
    '3',
    '4',
    '5'],
    6
));