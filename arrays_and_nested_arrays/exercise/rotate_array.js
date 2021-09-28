function rotateArray(array, numRotations) {
    let i = 0
    while (i < numRotations) {
        array.unshift(array.pop());
        i++
    }

    console.log(array.join(' '))
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);