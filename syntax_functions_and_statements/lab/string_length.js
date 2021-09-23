function str_length(input_data1, input_data2, input_data3) {
    let total_length = input_data1.length + input_data2.length + input_data3.length
    let avg_length = Math.floor(total_length / 3)

    console.log(total_length)
    console.log(avg_length)
}

str_length('chocolate', 'ice cream', 'cake')
str_length('pasta', '5', '22.3')
