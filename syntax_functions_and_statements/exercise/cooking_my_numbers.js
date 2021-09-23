function cooking_numbers(num, oper1, oper2, oper3, oper4, oper5) {
    let operations_list = [oper1, oper2, oper3, oper4, oper5]

    for (let operation of operations_list) {
        if (operation == 'chop') {
            num /= 2
        }
        else if (operation == 'dice') {
            num = Math.sqrt(num)
        }
        else if (operation == 'spice') {
            num += 1
        }
        else if (operation == 'bake') {
            num *= 3
        }
        else if (operation == 'fillet') {
            num -= num * 0.2
        }
        console.log(num)
    }
}

cooking_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')	
cooking_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')