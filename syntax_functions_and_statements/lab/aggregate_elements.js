function array_manipulations(input_array) {
    let array_sum = 0
    let array_inverse_sum = 0
    let array_concat_data = ''

    for (let i of input_array) {
        array_sum += i
        array_inverse_sum += 1/i
        array_concat_data += String(i)
    }
    
    console.log(array_sum)
    console.log(array_inverse_sum)
    console.log(array_concat_data)
}

array_manipulations([1, 2, 3])
array_manipulations([2, 4, 8, 16])