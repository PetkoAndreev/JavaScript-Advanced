function math_operations(num1, num2, operator) {
    if (operator == '+') {
        console.log(num1 + num2)
    }
    else if (operator == '-') {
        console.log(num1 - num2)
    }
    else if (operator == '*') {
        console.log(num1 * num2)
    }
    else if (operator == '/') {
        console.log(num1 / num2)
    }
    else if (operator == '**') {
        console.log(num1 ** num2)
    }
    else if (operator == '%') {
        console.log(num1 % num2)
    }
}

math_operations(5, 6, '+')
math_operations(3, 5.5, '*')

// Variant 2
function math_operations(num1, num2, operator) {
    let result = 0
    switch (operator) {
        case '+': result = num1 + num2; break
        case '-': result = num1 - num2; break
        case '*': result = num1 * num2; break
        case '/': result = num1 / num2; break
        case '%': result = num1 % num2; break
        case '**': result = num1 ** num2; break
    }
    console.log(result)
}

math_operations(5, 6, '+')
math_operations(3, 5.5, '*')