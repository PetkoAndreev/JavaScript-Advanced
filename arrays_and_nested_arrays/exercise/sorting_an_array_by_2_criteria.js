function sortArray(array) {
    sortedArray = array.sort((a, b) => {
        let ascSort = a.length - b.length;
        if (!ascSort == 0) {
            return ascSort;
        } else {
            return a.localeCompare(b);
        }
    });

    console.log(array.join(`\n`))
}

sortArray(['alpha',
    'beta',
    'gamma']
);
sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
sortArray(['test',
    'Deny',
    'omen',
    'Default']
);